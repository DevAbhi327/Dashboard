import { useState } from "react";
import CreatePassword from "./CreatePassword";
import { mobileNumberValidator } from "../../utils/inputValidator";
import ScreenLoader from "../ui/ScreenLoader";
import { resetPasswordByMobileNo, updatePasswordByMobileNo, verifyOtpResetPasswordByMobileNo } from "../../api/auth-api";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import LoginVerifyAccount from "./LoginVerifyAccount";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../constants/Routes";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [userNameStr, setUserNameStr] = useState('');
  const [showPage, setShowPage] = useState('resetScreen');
  const [error, setError] = useState("");
  const [mobileNumber, setMobileNumber] = useState({
    value: "",
    error: "",
  });
  const navigate = useNavigate();

  const validate = () => {
    const mobilenumberError = mobileNumberValidator(mobileNumber.value);
    if (mobilenumberError) {
      setMobileNumber({ ...mobileNumber, error: mobilenumberError });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
     const response=  await resetPasswordByMobileNo({
        mobileNo: mobileNumber.value,
      });
      // alert('Success! Check your messages for the next steps.');
      setShowPage('verifyScreen');
      setUserNameStr(response);
    } catch (error) {
      console.error(error);
      SwalError.fire({ title: error?.response?.data?.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  };


  // otp verification page
  const handleOtpVerify = async(otp) => {
    if (otp.some((digit) => digit === "")) {
      setError("Please enter all 4 digits of the OTP.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await verifyOtpResetPasswordByMobileNo({
        mobileNo: mobileNumber.value,
        otp: otp.join("")
      });
      setShowPage('createScreen');
    } catch (error) {
      console.error(error);
      SwalError.fire({ title: error?.response?.data?.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  // create new password
  const handleNewCreatePassword = async(password) => {
    setLoading(true);

    try {
      await updatePasswordByMobileNo({
        mobileNo: mobileNumber.value,
        password: password
      });
      SwalSuccess.fire("Password Updated Successfully!");
      setTimeout(() => {
        handleNavigateLogin();
      }, 3000);
    } catch (error) {
      console.error(error);
      SwalError.fire({ title: error?.response?.data?.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateLogin = () =>{
    navigate(AuthRoutes.LOGIN, {
      state:{
         username: '',
         password: ''
      }
     });
  }



  return (
    <>
      {loading && <ScreenLoader />}

      
        {showPage === 'resetScreen' ? (
          <>
           <div className="ForgotPassword auth_inner">
           <h2 className="pageName">Reset Password</h2>
            <div className="inputFields">
              <div className="inputBox">
                <div className="inputLabel">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                </div>
                <div className="inputField">
                  <input
                    id="mobileNumber"
                    type="text"
                    onChange={(e) =>
                      setMobileNumber({ value: e.target.value, error: "" })
                    }
                    maxLength={10}
                    placeholder="Enter mobile number"
                  />
                </div>
                <p className="error">{mobileNumber.error}</p>
              </div>
            </div>
            <div className="submitBtn">
              <button onClick={handleSubmit} className="authBtn">
                Continue
              </button>
            </div>
      </div>

          </>
        ) : showPage === 'createScreen' ?  (
          <CreatePassword userNameStr={userNameStr} handleCreatePassword={handleNewCreatePassword} />
        ) : showPage === 'verifyScreen' ? (
          <LoginVerifyAccount handleResendOtp={handleSubmit} handleOtpVerify={handleOtpVerify} error={error} />
        ) : null}
    </>
  );
};

export default ResetPassword;
