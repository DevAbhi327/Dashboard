import TextInput from "../ui/TextInput";

const VerificationSocialDetails = () => {
  return (
    <>
      <div className="VerificationSocialDetails">
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Social Media Details</h6>
          </div>
          <div className="inputBox fullInput">
            <TextInput labelName="Instagram" />
            <TextInput labelName="Facebook" />
            <TextInput labelName="LinkedIn" />
            <TextInput labelName="WhatsApp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationSocialDetails;
