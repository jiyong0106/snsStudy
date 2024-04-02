import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const useUserLogout = () => {
  const navigate = useNavigate();

  const userLogout = async () => {
    try {
      await auth.signOut();
      alert("로그아웃되었습니다.");
      navigate("/login");
    } catch (e) {
      console.error("error");
    }
  };
  return userLogout;
};
export default useUserLogout;
