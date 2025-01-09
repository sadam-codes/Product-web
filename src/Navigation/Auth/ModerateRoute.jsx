import PropTypes from "prop-types";

function ModerateRoute({ children }) {
  return { children };
}

export default ModerateRoute;

ModerateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
