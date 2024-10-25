import { Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import { TextFieldInput } from "../../components/inputs/TextFieldInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../hooks/useAuth";
import {
  FormRegisterCredentials,
  RegisterCredentials,
} from "../../interfaces/user";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/notification/notificacionSlice";
import { userRoleTypes } from "../../enums/userRoleTypes";
import { RadioInput } from "../../components/inputs/RadioInput";
export const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<FormRegisterCredentials>({
    defaultValues: {
      email: "",
      password: "",
      role: userRoleTypes.USER,
      name: "",
      passwordConfirm: "",
    },
    mode: "onSubmit",
  });
  const { startRegister } = useAuth();

  const registerSubmit = ({
    email,
    password,
    name,
    role,
  }: RegisterCredentials) => {
    console.log(role);
    startRegister({ name, email, password, role });
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
          <form onSubmit={handleSubmit(registerSubmit, onInvalidSubmit)}>
            <Grid container spacing={2} p={{ xs: 2, sm: 4, md: 5 }}>
              <Grid size={12} display={"flex"} justifyContent={"center"}>
                <AccountCircleIcon color="primary" fontSize="large" />
              </Grid>
              <Grid size={12}>
                <Typography textAlign={"center"} variant="h4">
                  Create account!
                </Typography>
              </Grid>
              <Grid size={12} sx={{}}>
                <TextFieldInput
                  control={control}
                  label="Name (*)"
                  fullWidth
                  color="secondary"
                  size="small"
                  error={errors.name}
                  name="name"
                  rules={{
                    required: {
                      value: true,
                      message: "The name is required.",
                    },
                  }}
                />
              </Grid>
              <Grid size={12} sx={{}}>
                <TextFieldInput
                  control={control}
                  label="Email (*)"
                  fullWidth
                  color="secondary"
                  size="small"
                  error={errors.email}
                  name="email"
                  rules={{
                    required: {
                      value: true,
                      message: "The email is required.",
                    },
                  }}
                />
              </Grid>

              <Grid size={12} sx={{}}>
                <RadioInput
                  control={control}
                  label="Role (*)"
                  name="role"
                  options={[
                    { label: "User", value: userRoleTypes.USER },
                    { label: "Admin", value: userRoleTypes.ADMIN },
                  ]}
                />
              </Grid>
              <Grid size={12}>
                <TextFieldInput
                  control={control}
                  label="Password (*)"
                  fullWidth
                  size="small"
                  type="password"
                  error={errors.password}
                  name="password"
                  rules={{
                    required: {
                      value: true,
                      message: "The password is required.",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "The password must be at least 6 characters long.",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextFieldInput
                  control={control}
                  label="Confirm password (*)"
                  fullWidth
                  size="small"
                  type="password"
                  error={errors.passwordConfirm}
                  name="passwordConfirm"
                  rules={{
                    required: {
                      value: true,
                      message: "The password confirm is required.",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "The password must be at least 6 characters long.",
                    },
                    validate: (value) => {
                      const { password } = getValues();
                      return value === password || "Passwords do not match";
                    },
                  }}
                />
              </Grid>
              <Grid size={12} marginX={10}>
                <Button
                  variant="contained"
                  fullWidth
                  size="small"
                  type="submit"
                >
                  Create
                </Button>
              </Grid>

              <Grid
                size={12}
                marginX={4}
                display={"flex"}
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography>Already have an account?</Typography>
                <Button
                  variant="text"
                  size="small"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
