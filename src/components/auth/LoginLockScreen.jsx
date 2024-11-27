/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { ShowHideEyeBtn } from "../ui/ButtonUI";
import userPic from '../../assets/matrimony/rajatPic.jpg'

const LoginLockScreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <div className="LoginLockScreen auth_inner">
        <h2 className="pageName">Lock Screen</h2>
        <p className="wlcTxt">Hello Rajat !</p>
        <div className="userDetail">
          <div className="pic"><img src={userPic} alt="" /></div>
          <p>prajat@gmail.com</p>
        </div>
        <div className="inputFields">
          <div className="inputBox">
            <div className="inputLable">
              <label htmlFor="">Password</label>
            </div>
            <div className="inputField">
              <input
                type={`${showPassword ? "password" : "text"}`}
                placeholder="password"
              />
              <ShowHideEyeBtn
                toggle={() => setShowPassword(!showPassword)}
                toggleValue={showPassword}
              />
            </div>
            <p className="error"></p>
          </div>
        </div>

        <div className="remember">
          <input type="checkbox" name="" id="" />
          Remember password?
        </div>
        <div className="submitBtn">
          <button className="authBtn">Unlock</button>
        </div>
        <p className="another">
          Try unlock with <button>Finger print</button> /{" "}
          <button>Face Id</button>
        </p>
      </div>
    </>
  );
};

export default LoginLockScreen;
