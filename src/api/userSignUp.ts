import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";

const useUserSignUp = () => {
  const navigate = useNavigate();
  const userLogin = async (data: any) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(res.user, {
        displayName: data.name,
      });
      navigate("/login");
    } catch (e) {
      console.error("signup error");
    }
  };
  return userLogin;
};
export default useUserSignUp;
