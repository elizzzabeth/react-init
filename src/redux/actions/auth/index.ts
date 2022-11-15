import { requestTypeCreator } from "src/helpers/index";
import { AuthResponseTypes, LoginRequestTypes, ResetPasswordRequestTypes } from "./types";

export const LOGIN = requestTypeCreator("LOGIN");
export const RESET_PASSWORD = requestTypeCreator("RESET_PASSWORD");

export const login = {
  error: (payload: IErrors): IActionType<IErrors> => ({
    payload,
    type: LOGIN.ERROR
  }),
  request: (payload: LoginRequestTypes): IActionType<LoginRequestTypes> => ({
    payload,
    type: LOGIN.REQUEST
  }),
  success: (payload: AuthResponseTypes): IActionType<AuthResponseTypes> => ({
    payload,
    type: LOGIN.SUCCESS
  })
};

export const resetPassword = {
  error: (payload: IErrors): IActionType<IErrors> => ({
    payload,
    type: RESET_PASSWORD.ERROR
  }),
  request: (payload: ResetPasswordRequestTypes): IActionType<ResetPasswordRequestTypes> => ({
    payload,
    type: RESET_PASSWORD.REQUEST
  }),
  success: () => ({
    type: RESET_PASSWORD.SUCCESS
  })
};
