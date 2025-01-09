/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BsChevronDown } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { Dropdown } from "react-bootstrap";
import SignOut from "./SignOut";
import IMAGES from "../images";
import { createImageFromInitials } from "../genericAction";
import { PATH } from "../../config";

function Header() {
  const dummyUser = JSON.parse(localStorage.getItem("project_name_user"));

  document.body.style.backgroundColor = "#f5f5f5";
  return (
    <>
      <ToastContainer />
      <div className="header">
        {/* Logo  */}
        <div className="header-left">
          <Link to={PATH.DASHBOARD} className="logo">
            <img
              src={IMAGES.PROFILE_LOGO}
              alt="Logo"
              className="img-fluid header-logo-set"
            />
          </Link>
        </div>
        <div className="PageName">
          <span id="toggle_btn">
            <FaBars />
          </span>
          {/* {auth?.project_name_user?.userType === "admin" && (
            <>
              {
                location.pathname === PATH.DASHBOARD &&
                <h3 className="ml-4">{`Dashboard`}</h3>
              }
            </>
          )} */}
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <span className="mobile_btn" id="mobile_btn">
          <FaBars />
        </span>
        {/* /Mobile Menu Toggle */}
        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  {dummyUser ? (
                    <img
                      className="rounded-circle"
                      src={IMAGES.PROFILE_LOGO}
                      width="31"
                      alt={dummyUser?.userType}
                    />
                  ) : (
                    <img
                      src={createImageFromInitials(
                        31,
                        dummyUser?.userType,
                        "#525E34"
                      )}
                      alt="image"
                      className="rounded-circle"
                    />
                  )}
                  <BsChevronDown className="text-dark ml-2" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="profile-dropmenu">
                <Dropdown.Item className="d-block px-0">Profile</Dropdown.Item>
                <Dropdown.Item className="d-block px-0">
                  <SignOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}

export default Header;
