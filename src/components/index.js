import React from "react";

const NoPage = React.lazy(() => import("./Amazon"));
const SignIn = React.lazy(() => import("./Medicine-page"));
const Dashboard = React.lazy(() => import("./Personal"));
const Secondpage = React.lazy(() => import("./Secondpage"));

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
  SECONDPAGE: Secondpage,
};

export default WEB_PAGES;
