import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const notAuthenticated = useSelector(
    (state: RootState) =>
      state.auth.status === "not-authenticated" ||
      state.auth.status === "checking"
  );

  return notAuthenticated ? children : <Navigate to="/posts/list" />;
};

export default PublicRoute;
