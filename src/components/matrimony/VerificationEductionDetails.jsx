import TextInput from "../ui/TextInput";

const VerificationEductionDetails = () => {
  return (
    <>
      <div className="VerificationEductionDetails">
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Education Details</h6>
          </div>
          <div className="inputBox fullInput">
            <TextInput labelName="Highest Degree" />
            <TextInput labelName="College Name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationEductionDetails;
