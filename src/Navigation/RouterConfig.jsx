import { Routes, Route } from "react-router-dom";
import WEB_PAGES from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import ModerateRoute from "./Auth/ModerateRoute";
import INITIAL_VALUE from "./DataRouteConfig";

function RouterConfig() {
  return (
    <Routes>
      {INITIAL_VALUE?.map((item) => {
        let element;
        if (item?.route === "PublicRoute") {
          element = <PublicRoute>{item?.page}</PublicRoute>;
        } else if (item?.route === "ModerateRoute") {
          element = <ModerateRoute>{item?.page}</ModerateRoute>;
        } else {
          element = <PrivateRoute>{item?.page}</PrivateRoute>;
        }

        return <Route key={item?.path} path={item?.path} element={element} />;
      })}

      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NOPAGE />} />
    </Routes>
  );
}

export default RouterConfig;
