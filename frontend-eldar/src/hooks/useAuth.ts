import { useDispatch, useSelector } from "react-redux";

import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { RootState } from "../redux/store";
import { onChecking, onLogin, onLogout } from "../redux/auth/authSlice";
import {
  LoginCredentials,
  RegisterCredentials,
  User,
} from "../interfaces/user";
import { showNotification } from "../redux/notification/notificacionSlice";

const { VITE_API_AUTH_URL } = getEnvVariables();

const apiAuth = axios.create({
  baseURL: VITE_API_AUTH_URL,
});

export const useAuth = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { status, user } = useSelector((state: RootState) => state.auth);

  const startLogin = async ({ email, password }: LoginCredentials) => {
    dispatch(onChecking());
    try {
      const { data } = await apiAuth.post<User>("/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch(onLogin(data));

      navigate("/posts/list");
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { response } = error;
        console.log(error);
        dispatch(
          showNotification({
            severity: "error",
            message: response?.data?.msg || "Authentication error. ",
          })
        );
      } else {
        dispatch(
          showNotification({
            severity: "error",
            message: "An unknown error occurred.",
          })
        );
      }
      startLogout();
    }
  };

  const startRegister = async ({
    email,
    password,
    name,
    role,
  }: RegisterCredentials) => {
    dispatch(onChecking());

    try {
      const { data } = await apiAuth.post<User>("/new", {
        email,
        password,
        name,
        role,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      navigate("/posts/list");

      dispatch(onLogin(data));
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { response } = error;
        dispatch(
          showNotification({
            severity: "error",
            message: response?.data?.msg || "Authentication error. ",
          })
        );
      } else {
        dispatch(
          showNotification({
            severity: "error",
            message: "An unknown error occurred.",
          })
        );
      }
      startLogout();
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const config = {
        headers: {
          "x-token": token,
        },
      };

      const { data } = await apiAuth.get<User>("renew", config);

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch(onLogin(data));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    navigate("/login");
  };

  return {
    status,
    user,
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
