import { useSelector } from "react-redux";
import { Role } from "../interfaces/user";
import { RootState } from "../redux/store";

export const useCheckRole = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const checkRole = ({ role }: Role) => {
    return role === user?.role;
  };
  return { checkRole };
};
