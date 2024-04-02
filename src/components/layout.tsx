import { Outlet } from "react-router-dom";
import useUserLogout from "../api/userLogout";
const Layout = () => {
  const userLogout = useUserLogout();
  return (
    <>
      <button onClick={userLogout}>로그아웃</button>
      <Outlet />
    </>
  );
};

export default Layout;
