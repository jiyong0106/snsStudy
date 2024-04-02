import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return <Navigate to="/login" />;
      }
    });
  }, []);
  console.log(user);

  return children;
};

export default ProtectedRoute;

//유저정보 요청 컴포넌트
