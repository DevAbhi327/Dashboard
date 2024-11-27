import TextInput from "../../components/ui/TextInput";
import "../../styles/matrimony/MatrimonyVerificationDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ButtonMain } from "../../components/ui/ButtonUI";
import { dateFormatHandler } from "../../utils/date-formatter";
import ScreenLoader from "../../components/ui/ScreenLoader";
import {
  approvedUserVerification,
  rejectUserVerification,
} from "../../api/user-verification-api";
import { SwalError, SwalInput, SwalSuccess } from "../../utils/custom-alert";
import ImageWithSkelton from "../../components/ui/skeltons/ImageWithSkelton";

const MatrimonyVerificationDetail = () => {
  const location = useLocation();
  const userData = location?.state?.userData;
  const [loading, setLoading] = useState(false);

  const userImages = [
    { img: userData?.verificationFrontPhotoUrl },
    { img: userData?.verificationLeftPhotoUrl },
    { img: userData?.verificationRightPhotoUrl },
  ];

  const navigate = useNavigate();

  const onRejectInputHandler = async () => {
    const { value: message } = await SwalInput.fire({
      input: "textarea",
      inputLabel: "Enter Rejection Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
      showCancelButton: true,
    });

    if (message) {
      onRejectHandler(message);
    }
  };

  const onRejectHandler = async (message) => {
    setLoading(true);
    try {
      await rejectUserVerification(userData?.userId, message);
      SwalSuccess.fire({
        title: "User Rejected Successfully!",
      });
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.log(error?.response?.data?.message);
      SwalError.fire({
        title: error?.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };
  const onApprovedHandler = async () => {
    setLoading(true);

    try {
      await approvedUserVerification(userData?.userId);
      SwalSuccess.fire({
        title: "User Approved Successfully!",
      });
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.log(error?.response?.data?.message);
      SwalError.fire({
        title: error?.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="MatrimonyVerificationDetail">
        <div className="details_inner">
          <h5 className="title">{userData?.name}, Verification Details</h5>
          <div className="box_container details">
            <div className="inputBox">
              <TextInput
                defaultValue={userData?.name}
                disabled
                labelName="Full Name"
              />
              <TextInput
                defaultValue={dateFormatHandler(userData?.dob)}
                disabled
                labelName="Date of Birth"
              />
              <TextInput
                defaultValue={userData?.gender}
                disabled
                labelName="Gender"
              />
            </div>
          </div>
          <div className="box_container">
            <div className="head">
              <h6 className="detailHeading">User Upload Images</h6>
            </div>
            <div className="imgContainer">
              {userImages?.map((e, i) => {
                return (
                  <ImageWithSkelton key={i} clsName='imageBox' src={e.img} />
                );
              })}
            </div>
          </div>
          <div className="box_container">
            <div className="head">
              <h6 className="detailHeading">User Govt ID</h6>
            </div>
            <div className="doc_imgs">
            <ImageWithSkelton clsName='doc_img' src={userData?.verificationDocPhotoUrl} />
            <ImageWithSkelton clsName='doc_img' src={userData?.verificationIdPhotoBackUrl} />
            </div>
          </div>
          <div className="box_container">
            <div className="head">
              <h6 className="detailHeading">User Face Image</h6>
            </div>
            <ImageWithSkelton clsName='selfieImg' src={userData?.profilePhotoUrl} />
          </div>

          <div className="centerBtns">
            <ButtonMain
              onClick={onRejectInputHandler}
              btnColor="red"
              name="Reject"
            />
            <ButtonMain
              onClick={onApprovedHandler}
              btnColor="green"
              name="Approved"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyVerificationDetail;
