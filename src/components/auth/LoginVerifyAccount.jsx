import React, { useState, useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */

const LoginVerifyAccount = ({handleOtpVerify, error, handleResendOtp}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(50);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }

    if (event.key === "Enter") {
      handleOtpVerify(otp);
    }
  };



  const handleResend = () => {
    if (canResend) {
      console.log("Resending OTP...");
      setCanResend(false);
      setTimer(50);
      handleResendOtp()
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setCanResend(true);
            return 50; 
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      setCanResend(true);
    };
  }, []);

  return (
    <div className="LoginVerifyAccount auth_inner">
      <h2 className="pageName">Verify Your Account</h2>
      <p className="wlcTxt">
        Enter the 4 digit code sent to the registered mobile no.
      </p>

      <div className="otpFields">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            minLength={1}
            maxLength={1}
            className="singleDigit"
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="remember">
        Did not receive a code? 
        <button className="resendBtn" onClick={handleResend} disabled={!canResend}>
          {canResend ? "Resend" : `Resend in ${timer}s`}
        </button>
      </div>
      <div className="submitBtn">
        <button className="authBtn" onClick={()=>handleOtpVerify(otp)}>
          Verify
        </button>
      </div>
      <p className="error note">
        Don't share the verification code with anyone!
      </p>
    </div>
  );
};

export default LoginVerifyAccount;
