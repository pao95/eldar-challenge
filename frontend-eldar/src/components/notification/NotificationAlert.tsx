import { Alert, Snackbar } from "@mui/material";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../redux/notification/notificacionSlice";

export const NotificationAlert = () => {
  const { show, severity, message } = useSelector(
    (state: RootState) => state.notification
  );

  const dispatch = useDispatch();

  return (
    <Snackbar
      open={show}
      autoHideDuration={5000}
      onClose={() => {
        dispatch(hideNotification());
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => {
          dispatch(hideNotification());
        }}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
