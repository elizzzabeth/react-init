export type AuthResponseTypes = {
  token?: string;
};

export interface LoginResponseTypes {
  token: string;
}

export interface LoginRequestTypes {
  username: string;
  password: string;
}

export interface ResetPasswordRequestTypes {
  email: string;
}
