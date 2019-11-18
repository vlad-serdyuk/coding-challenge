import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_EXPIRED } from './constants';
import { isUserLoggedIn } from '../../services/auth/AuthService';

const initialState = { isLoggedIn: isUserLoggedIn, error: '' };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.message,
      };
    case LOGIN_EXPIRED:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.message,
      };
    default:
      return state;
    }
};

export default loginReducer;