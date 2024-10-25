import { Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import { TextFieldInput } from "../../components/inputs/TextFieldInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../../hooks/useAuth";
import { LoginCredentials } from "../../interfaces/user";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/notification/notificacionSlice";

export const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginCredentials>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
  const { startLogin } = useAuth();

  const onSubmit = ({ email, password }: LoginCredentials) => {
    startLogin({ email, password });
  };

  const onInvalidSubmit = () => {
    dispatch(
      showNotification({
        severity: "error",
        message: "You must complete the required fields.",
      })
    );
  };

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid size={{ xs: 12, sm: 8, md: 5 }}>
        <Paper elevation={3}>
          <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
            <Grid container spacing={2} p={{ xs: 2, sm: 4, md: 5 }}>
              <Grid size={12} display={"flex"} justifyContent={"center"}>
                <LoginIcon color="primary" fontSize="large" />
              </Grid>
              <Grid size={12}>
                <Typography textAlign={"center"} variant="h4">
                  Welcome!
                </Typography>
              </Grid>
              <Grid size={12}>
                <TextFieldInput
                  control={control}
                  name="email"
                  label="Email (*)"
                  size="small"
                  fullWidth
                  error={errors.email}
                  rules={{
                    required: {
                      value: true,
                      message: "The email is required.",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextFieldInput
                  control={control}
                  label="Password (*)"
                  fullWidth
                  size="small"
                  type="password"
                  name="password"
                  rules={{
                    required: {
                      value: true,
                      message: "The password is required.",
                    },
                  }}
                  error={errors.password}
                />
              </Grid>
              <Grid size={12} marginX={10}>
                <Button
                  variant="contained"
                  fullWidth
                  size="small"
                  type="submit"
                >
                  Login
                </Button>
              </Grid>

              <Grid
                size={12}
                marginX={5}
                display={"flex"}
                justifyContent={"center"}
              >
                <Button
                  variant="text"
                  size="small"
                  onClick={() => navigate("/signup")}
                >
                  Create account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
