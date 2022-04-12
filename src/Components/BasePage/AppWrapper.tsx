import { connect } from "react-redux";
import React, { Component, ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { CacheSwitch } from "react-router-cache-route";

import { StoreState } from '@store'
import RouterWrapper from "./RouterWrapper";
import { GetQueryString } from "@/utils/util";
import * as actionCreators from "@/store/actions";
import { MapStateToProps, MapDispatchToProps } from '@types'
import ErrorBoundary from "../ErrorBoundaries";

type Iprops = {
  children: ReactElement[];
};

type Props = MapStateToProps<typeof mapStateToProps> & MapDispatchToProps<typeof mapDispatchToProps> & Iprops

class BasePage extends Component<Props> {
  componentDidMount() {
    this.props.intApp();
  }
  render() {
    const { finishInit } = this.props;
    let redirectPath = GetQueryString('path');
    if (!redirectPath) {
      redirectPath = "/home";
    }

    if (finishInit) {
      return (
        <RouterWrapper>
          <ErrorBoundary>
            <CacheSwitch>
              {this.props.children}
              {/* 在 hashRouter 下为了实现微信分享功能需要开启重定向模式  */}
              {redirectPath && (
                <Redirect from="/" to={redirectPath} />
              )}
            </CacheSwitch>
          </ErrorBoundary>

        </RouterWrapper>
      );
    }
    return null;
  }
}
const mapStateToProps = (state: StoreState) => {
  return {
    finishInit: state.Home.finishInit,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    intApp: function () {
      dispatch(actionCreators.intApp());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BasePage);
