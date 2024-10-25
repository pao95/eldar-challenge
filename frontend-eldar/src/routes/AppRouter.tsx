import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../modules/login/LoginPage";
import { SignupPage } from "../modules/signup/SignupPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { PostsProvider } from "../modules/posts/context/PostsProvider";
import { PostsPage } from "../modules/posts/PostsPage";
import { Layout } from "../components/layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const AppRouter = () => {
  const { checkAuthToken } = useAuth();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        {/* Private Routes */}
        <Route
          path="/posts/list"
          element={
            <PrivateRoute>
              <PostsProvider>
                <PostsPage />
              </PostsProvider>
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
