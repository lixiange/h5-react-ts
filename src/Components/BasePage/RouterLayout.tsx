import { connect } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StoreState } from '@store'


import TabRoute from "../TabRoute";

interface Iprops {
  path: string,
  exact?: boolean,
  tabRoute?: boolean,
  hasLogin:boolean,
  children: ReactElement
}

interface Layoutprops {
  tabRoute?: boolean,
  children: ReactElement
}

function Layout(props: Layoutprops) {
  const { tabRoute } = props;
  let match = useRouteMatch();
  const { path } = match;

  useEffect(() => {
  }, []);
  // 判断是否有底部导航
  if (tabRoute) {
    return (
      <Route {...props}>
        <TabRoute path={path}>
          {props.children}
        </TabRoute>
      </Route>
    );
  }
  return <Route {...props}>{props.children}</Route>;
}

function AppRoute(props: Iprops) {
  const { exact, path } = props;

  return (
    <Route exact={exact} path={path}>
      <Layout {...props}>{props.children}</Layout>
    </Route>
  );
}

export default connect((state: StoreState) => ({
  hasLogin: state.User.hasLogin
}))(AppRoute);
