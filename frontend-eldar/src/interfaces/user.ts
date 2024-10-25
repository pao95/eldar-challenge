import { userRoleTypes } from "../enums/userRoleTypes";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface FormRegisterCredentials extends RegisterCredentials {
  passwordConfirm: string;
}

export interface RegisterCredentials {
  name: string;
  password: string;
  email: string;
  role: userRoleTypes;
}

export interface User {
  token: string;
  name: string;
  uid: string;
  email: string;
  role: userRoleTypes;
}

export interface Role {
  role: userRoleTypes;
}
