import React, { useState } from "react";
import { ShowHideEyeBtn } from "../ui/ButtonUI";
import { passwordValidator } from "../../utils/inputValidator";

const CreatePassword = ({ handleCreatePassword, userNameStr }) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const newPasswordError = passwordValidator(newPassword);
    
    if (newPasswordError) {
      setError(newPasswordError);
      return false;
    }
  
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return false;
    }
  
    setError(null);
    return true;
  };
  

  const handleSubmit = () => {
    if (!validate()) return;
    handleCreatePassword(newPassword);
  };

  return (
    <>
      <div className="ForgotPassword auth_inner">
        <h2 className="pageName">Reset Password</h2>

        <p className="wlcTxt">Hello {userNameStr ? userNameStr : 'User'}</p>

        <div className="inputFields">
          <div className="inputBox">
            <div className="inputLabel">
              <label htmlFor="newPassword">New Password</label>
            </div>
            <div className="inputField">
              <input
                id="newPassword"
                type={showNewPassword ? "password" : "text"}
                placeholder="new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <ShowHideEyeBtn
                toggle={() => setShowNewPassword(!showNewPassword)}
                toggleValue={showNewPassword}
              />
            </div>
          </div>
          <div className="inputBox">
            <div className="inputLabel">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <div className="inputField">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "password" : "text"}
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onPaste={(e)=>{
                  e.preventDefault()
                  return false;
                }}
              />
              <ShowHideEyeBtn
                toggle={() => setShowConfirmPassword(!showConfirmPassword)}
                toggleValue={showConfirmPassword}
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
        <div className="submitBtn">
          <button className="authBtn" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
