import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useUserSignIn = () => {
  const navigate = useNavigate();

  const userSignIn = async (data: any) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigate("/");
    } catch (e) {
      console.error("error");
    }
  };
  return userSignIn;
};
export default useUserSignIn;
