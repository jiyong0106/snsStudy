import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const useUserLogout = () => {
  const navigate = useNavigate();

  const userLogout = async () => {
    const ok = window.confirm("로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return userLogout;
};
export default useUserLogout;
