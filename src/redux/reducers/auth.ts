import { LOGIN, RESET_PASSWORD } from "src/redux/actions/auth";
import { AuthResponseTypes } from "src/redux/actions/auth/types";

export const initialState: AuthState = {
  isLoading: false,
  authData: undefined,
  error: undefined
};

export interface AuthState {
  isLoading: boolean;
  authData: AuthResponseTypes | undefined;
  error: IErrors | undefined;
}

const auth = (state = initialState, action: IActionType<AuthResponseTypes | IErrors>): AuthState => {
  switch (action.type) {
    case LOGIN.REQUEST:
    case RESET_PASSWORD.REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: undefined
      };
    }

    case LOGIN.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authData: action.payload as AuthResponseTypes,
        error: undefined
      };
    }

    case RESET_PASSWORD.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined
      };
    }

    case LOGIN.ERROR:
    case RESET_PASSWORD.ERROR: {
      return {
        ...state,
        isLoading: false,
        error: (action.payload as IErrors) || {}
      };
    }

    default:
      return state;
  }
};

export default auth;
