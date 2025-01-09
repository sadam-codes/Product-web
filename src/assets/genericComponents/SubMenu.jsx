import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";

function SubMenu({ item }) {
  const location = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  let arrowIcon = null;
  if (item?.subNav) {
    arrowIcon = subnav ? (
      <BsArrowDownShort className="ms-auto right_arrow_hide me-0" size={23} />
    ) : (
      <BsArrowRightShort className="ms-auto right_arrow_hide me-0" size={23} />
    );
  }

  return (
    <>
      <li
        className={` ${
          item?.path?.includes(location?.pathname) ? "active" : ""
        }`}
      >
        {item?.path ? (
          <Link onClick={showSubnav} to={{ pathname: item?.path || "" }}>
            {item?.icon}
            <span>{item?.title}</span>
            {arrowIcon}
          </Link>
        ) : (
          <Link
            // Add event parameter to onClick event handler
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              showSubnav(); // Toggle the submenu visibility
            }}
            to={{ pathname: "" }}
          >
            {item?.icon}
            <span>{item?.title}</span>
            {arrowIcon}
          </Link>
        )}
      </li>
      <ul className="block">
        {subnav &&
          item?.subNav?.map((navItem) => (
            <React.Fragment key={navItem.id}>
              {navItem?.subNav ? (
                <SubMenu item={navItem} />
              ) : (
                <li
                  className={` ${
                    navItem?.pathList?.includes(location?.pathname)
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    className={` ${
                      navItem?.pathList?.includes(location?.pathname)
                        ? ""
                        : "text-white"
                    }`}
                    to={{ pathname: navItem?.path }}
                    onClick={navItem?.onClick}
                  >
                    <div className="flex items-center justify-center">
                      {navItem?.icon}
                      <div className="SubnavLabel">{navItem?.title}</div>
                    </div>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
      </ul>
    </>
  );
}

SubMenu.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SubMenu;
