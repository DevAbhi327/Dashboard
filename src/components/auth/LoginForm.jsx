import { useState } from "react";
import { ShowHideEyeBtn } from "../ui/ButtonUI";
import googlePng from "../../assets/socialIcon/googlePNG.png";
import facebookPng from "../../assets/socialIcon/facebookPNG.png";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../constants/Routes";
import { useDispatch } from "react-redux";
import {
  passwordValidator,
  usernameValidator,
} from "../../utils/inputValidator";
import { loginApi } from "../../api/auth-api";
import ScreenLoader from "../ui/ScreenLoader";
import { SwalError } from "../../utils/custom-alert";
import { jwtDecode } from "jwt-decode";
import { storeEncryptedValue } from "../../utils/localStorage";
import { setUserInfo } from "../../redux/feature/feature-userInfo";
const LoginForm = () => {
  // show and hide toggle password button
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();

  const [username, setUsername] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const validate = () => {
    let usernameError = usernameValidator(username.value);
    let passwordError = passwordValidator(password.value);
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError });
      setPassword({ ...password, error: passwordError });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    // try {
    //   const response = await loginApi({
    //     username: username.value,
    //     password: password.value,
    //   });
    //   dispatch(
    //     setUserInfo(
    //       Object.assign(jwtDecode(response), { token: response })
    //     )
    //   );

    //   if (remember) {
    //     storeEncryptedValue("token", response);
    //   }
      
    // } catch (error) {
    //   console.log(error);
    //   SwalError.fire({
    //     title: error?.response?.data?.message || "An error occurred.",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="LoginForm auth_inner">
        <h2 className="pageName">Sign In</h2>
        <p className="wlcTxt">Welcome back!</p>

        <div className="inputFields">
          <div className="inputBox">
            <div className="inputLable">
              <label htmlFor="">Username</label>
            </div>
            <div className="inputField">
              <input
                type="text"
                onChange={(e) =>
                  setUsername({ value: e.target.value, error: "" })
                }
                placeholder="username"
              />
            </div>
            <p className="error">{username?.error}</p>
          </div>
          <div className="inputBox">
            <div className="inputLable">
              <label htmlFor="">Password</label>
              <Link to={AuthRoutes.RESET_PASSWORD} className="forget">
                Forgot password?
              </Link>
            </div>
            <div className="inputField">
              <input
                type={`${showPassword ? "password" : "text"}`}
                placeholder="password"
                onChange={(e) =>
                  setPassword({ value: e.target.value, error: "" })
                }
              />
              <ShowHideEyeBtn
                toggle={() => setShowPassword(!showPassword)}
                toggleValue={showPassword}
              />
            </div>
            <p className="error">{password?.error}</p>
          </div>
        </div>

        <div className="remember">
          <input
            type="checkbox"
            onChange={() => setRemember(!remember)}
            name=""
            id=""
          />
          Remember password?
        </div>
        <div className="submitBtn">
          <button onClick={handleSubmit} className="authBtn">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
