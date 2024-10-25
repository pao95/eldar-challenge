import { Backdrop, CircularProgress } from "@mui/material";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { hiddeSpinner } from "../../redux/spinner/spinnerSlice";

export const Spinner = () => {
  const { show } = useSelector((state: RootState) => state.spinner);
  const { status } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={show || status === "checking"}
      onClick={() => dispatch(hiddeSpinner())}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
