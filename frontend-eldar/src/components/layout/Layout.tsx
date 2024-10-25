import { ReactNode } from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { NotificationAlert } from "../notification/NotificationAlert";
import { Navbar } from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Spinner } from "../spinner/Spinner";

interface LayoutProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0097a7",
    },
    secondary: {
      main: "#26a69a",
    },
  },
});
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.status === "authenticated"
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {isAuthenticated && <Navbar />}
        <Spinner />
        <NotificationAlert />
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider>
  );
};
