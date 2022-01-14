import { AUTH_USER, LOGOUT_USER } from "../types";
import * as api from "../../../api";

export const registerUser = (userData) => ({
  type: AUTH_USER,
  payload: api.registerUser(userData),
});

export const loginUser = (userData) => ({
  type: AUTH_USER,
  payload: api.loginUser(userData),
});

export const autoSignIn = () => ({
  type: AUTH_USER,
  payload: api.autoSignIn(),
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: api.logoutUser(),
});

export const updateProfile = (formData, isEmailChanged) => ({
  type: AUTH_USER,
  payload: api.updateProfile(formData, isEmailChanged),
});
