import PropTypes from "prop-types";
import { ERROR } from "../../config";

export function ErrorMessage(props) {
  return (
    <div className="error-message-generic">
      <p className={`${props?.className} mb-0`}>
        {props?.message || ERROR.SYSTEM_ERROR}
      </p>
    </div>
  );
}

export function FieldError(props) {
  return (
    <div className="error-message-field-generic">
      <p className={`${props?.className} mb-0`}>
        {props?.message || ERROR.SYSTEM_ERROR}
      </p>
    </div>
  );
}

ErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

FieldError.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
