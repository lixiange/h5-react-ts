import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { connect } from "react-redux";

import { StoreState } from '@store'

import home from "../../static/images/tab-icon/home.png";
import home_select from "../../static/images/tab-icon/home_select.png";
import solution from "../../static/images/tab-icon/solution.png";
import solution_select from "../../static/images/tab-icon/solution_select.png";
import styles from "./style.module.scss";
let cx = classNames.bind(styles);

interface Props {
  path: string;
  children: ReactElement
}

function TabRoute(props: Props) {
  const { path } = props;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>{props.children}</div>
      <div className={cx("tab-bar")}>
        <div className="horizontal-1pxborder"></div>
        <Link
          to="/home"
          replace
          className={cx({
            "tab-item": true,
            active: path === "/home",
          })}
        >
          <div className={cx("item")}>
            <img src={path === "/home" ? home_select : home} alt="首页" />
            <span>首页</span>
          </div>
        </Link>
        <Link
          to="/solution"
          replace={false}
          className={cx({
            "tab-item": true,
            active: path === "/solution",
          })}
        >
          <div className={cx("item")}>
            <img
              src={path === "/solution" ? solution_select : solution}
              alt="解决方案"
            />
            <span>解决方案</span>
          </div>
        </Link>
      </div>

    </div>
  );
}
const mapStateToProps = (state: StoreState) => {
  return {

  };
};

export default connect(mapStateToProps, null)(TabRoute);
