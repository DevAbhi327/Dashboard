import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../constants/Routes";
import AuthMainBG from "../auth/AuthMainBG";
import AuthLeftSide from "../../components/auth/AuthLeftSide";
import LoginForm from "../../components/auth/LoginForm";
import LoginVerifyAccount from "../../components/auth/LoginVerifyAccount";
import LoginLockScreen from "../../components/auth/LoginLockScreen";
import ResetPassword from "../../components/auth/ResetPassword";
const Auth = () => {
  return (
    <>
         <Routes>
        {/* login page */}
        <Route path={AuthRoutes.LOGIN} element={<AuthMainBG TxtScreen={<AuthLeftSide />} FormScreen={<LoginForm />} />} />
        {/* <Route path={AuthRoutes.USER_VERIFY} element={<AuthMainBG TxtScreen={<AuthLeftSide />} FormScreen={<LoginVerifyAccount />} />} /> */}
        <Route path={AuthRoutes.RESET_PASSWORD} element={<AuthMainBG TxtScreen={<AuthLeftSide />} FormScreen={<ResetPassword />} />} />
        <Route path={AuthRoutes.LOCK_SCREEN} element={<AuthMainBG TxtScreen={<AuthLeftSide />} FormScreen={<LoginLockScreen />} />} />
        {/* <Route path={AuthRoutes.REGISTER} element="register" /> */}
        <Route path="*" element={<AuthMainBG TxtScreen={<AuthLeftSide />} FormScreen={<LoginForm />} />} />
      </Routes>
    </>
  );
};

export default Auth;
