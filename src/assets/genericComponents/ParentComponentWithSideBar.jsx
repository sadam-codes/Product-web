import PropTypes from "prop-types";
import Sidebar from "./SideBar";

function ParentComponentWithSideBar({ children }) {
  return (
    <div className="main-wrapper">
   
      <Sidebar />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}

ParentComponentWithSideBar.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ParentComponentWithSideBar;
