import { Tab, Tabs } from "react-bootstrap";
import "../../styles/matrimony/MatrimonyVerification.css";
import VerificationTabBody from "../../components/matrimony/VerificationTabBody";
import VerificationBasicDetails from "../../components/matrimony/VerificationBasicDetails";
import VerificationPartnerBasicDetails from "../../components/matrimony/VerificationPartnerBasicDetails";
import VerificationSocialDetails from "../../components/matrimony/VerificationSocialDetails";
import userSelfie from "../../assets/matrimony/userPics/rajatSelfie.jpg";
import adharFront from "../../assets/matrimony/userPics/adharFront.png";
import adharBack from "../../assets/matrimony/userPics/adharBack.png";
import certificate from "../../assets/matrimony/userPics/certificate.png";
import VerificationEductionDetails from "../../components/matrimony/VerificationEductionDetails";
const MatrimonyVerification = () => {
  return (
    <>
      <div className="MatrimonyVerification">
        <div className="headBgGreen">
          <h5 className="title">Verification</h5>
          <Tabs defaultActiveKey="basicDetail" className="verificationTab">
            <Tab
              className="verificationTab_body"
              eventKey="basicDetail"
              title="Basic Detail"
            >
              <VerificationTabBody rightScreen={<VerificationBasicDetails />} />
            </Tab>
            <Tab
              className="verificationTab_body"
              eventKey="partnerBasicDetail"
              title="Partner Basic Detail"
            >
              <VerificationTabBody
                rightScreen={<VerificationPartnerBasicDetails />}
              />
            </Tab>
            <Tab
              className="verificationTab_body"
              eventKey="socialMediaDetail"
              title="Social Media Details"
            >
              <VerificationTabBody
                rightScreen={<VerificationSocialDetails />}
              />
            </Tab>
            <Tab
              className="verificationTab_body"
              eventKey="govtId"
              title="Govt ID Verification"
            >
              <div className="tab_body">
                <div className="box_container socialMedia">
                  <div className="heading">
                    <h5>Aadhar Card Images</h5>
                  </div>
                  <div className="doc_imgs">
                    <div className="doc_img">
                      <img src={adharFront} alt="" />
                    </div>
                    <div className="doc_img">
                      <img src={adharBack} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              className="verificationTab_body"
              eventKey="faceVerification"
              title="Face Verification"
            >
              <VerificationTabBody
                rightScreen={
                  <>
                    <div className="selfieImg">
                      <img src={userSelfie} alt="" />
                    </div>
                  </>
                }
              />
            </Tab>
            <Tab
              className="verificationTab_body"
              eventKey="educationVerification"
              title="Education Verification"
            >
              <VerificationTabBody
                leftScreen={
                  <>
                    <div className="certificatImages">
                      <div className="certificateImg">
                        <img src={certificate} alt="" />
                      </div>
                    </div>
                  </>
                }
                rightScreen={<VerificationEductionDetails />}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MatrimonyVerification;
