import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) =>
      state.auth.status === "authenticated" || state.auth.status === "checking"
  );
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
