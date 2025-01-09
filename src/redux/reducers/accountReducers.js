/* eslint-disable default-param-last */
import { ACCOUNT } from "../actions/utilities";

const projectNameUser = JSON.parse(localStorage.getItem("project_name_user"));

const INITIAL_STATE = {
  accountGetUserInfoLoading: false,
  accountGetUserInfoSuccess: false,
  accountGetUserInfoFailure: false,
  accountGetUserInfoError: null,
  accountGetUserInfo: projectNameUser || [],
};

const accountReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT.ACCOUNT_GET_USER_INFO_REQUEST:
      return {
        ...state,
        accountGetUserInfoLoading: true,
        accountGetUserInfoSuccess: false,
        accountGetUserInfoFailure: false,
        accountGetUserInfoError: null,
        accountGetUserInfo: [],
      };
    case ACCOUNT.ACCOUNT_GET_USER_INFO_SUCCESS:
      return {
        ...state,
        accountGetUserInfoLoading: false,
        accountGetUserInfoSuccess: true,
        accountGetUserInfoFailure: false,
        accountGetUserInfoError: null,
        accountGetUserInfo: action.payload,
      };
    case ACCOUNT.ACCOUNT_GET_USER_INFO_FAILURE:
      return {
        ...state,
        accountGetUserInfoLoading: false,
        accountGetUserInfoSuccess: false,
        accountGetUserInfoFailure: true,
        accountGetUserInfoError: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducers;
