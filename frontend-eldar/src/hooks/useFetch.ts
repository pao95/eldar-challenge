import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { useDispatch } from "react-redux";
import { hiddeSpinner, showSpinner } from "../redux/spinner/spinnerSlice";

export const axiosApi = axios.create();
const { VITE_API_JSON_PLACEHOLDER_URL } = getEnvVariables();

interface FetchParams {
  method: "GET" | "POST" | "PUT" | "DELETE"; // Puedes agregar otros métodos según sea necesario
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any; // O especifica un tipo más estricto según lo que necesites
}

interface AfterFunctionResponse {
  status: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any; // O especifica un tipo más estricto
  message?: string;
}

const useFetch = () => {
  const dispatch = useDispatch();

  const callEndpoint = async (
    params: FetchParams,
    afterFunction: (response: AfterFunctionResponse) => void
  ) => {
    dispatch(showSpinner());
    const { method, url, body } = params;

    try {
      const result = await axiosApi({
        method,
        url: `${VITE_API_JSON_PLACEHOLDER_URL}/${url}`,
        data: body,
      } as AxiosRequestConfig);
      dispatch(hiddeSpinner());

      return afterFunction({ status: true, data: result.data });
    } catch (err) {
      dispatch(hiddeSpinner());
      const error = err as AxiosError;
      return afterFunction({
        status: false,
        message: error.message,
      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    return () => {
      controller.abort();
    };
  }, []);

  return {
    callEndpoint,
  };
};

export default useFetch;
