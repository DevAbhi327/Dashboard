/* eslint-disable no-constant-condition */
import { BrowserRouter } from "react-router-dom";
import Authenticate from "./Authenticate";
import Auth from "./Auth";
import { useSelector } from "react-redux";

const Navigation = () => {
  const userInfo = useSelector((state) => state.UserInfo);

  return (
    <>
      <BrowserRouter>{userInfo?.token ? <Authenticate /> : <Auth />}</BrowserRouter>
    </>
  );
};

export default Navigation;
