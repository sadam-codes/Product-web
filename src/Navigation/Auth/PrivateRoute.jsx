import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { PATH } from "../../config";
import ParentComponentWithSideBar from "../../assets/genericComponents/ParentComponentWithSideBar";

function PrivateRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem("project_name_user"));

  if (jwtToken) {
    return <ParentComponentWithSideBar>{children}</ParentComponentWithSideBar>;
  }
  return <Navigate to={PATH.SIGN_IN} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
