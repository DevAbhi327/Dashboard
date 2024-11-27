import TextInput from "../ui/TextInput";

const VerificationPartnerBasicDetails = () => {
  return (
    <>
      <div className="VerificationBasicDetails">
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Partner Basic Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="First Name" />
            <TextInput labelName="Last Name" />
            <TextInput labelName="Age" />
            <TextInput labelName="Marital Status" />
            <TextInput labelName="No. of children" />
            <TextInput labelName="Height" />
            <TextInput labelName="Any Disability" />
            <TextInput labelName="Manglik / Chevval / Dosham" />
          </div>
        </div>

        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Partner Location Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Country Living in" />
            <TextInput labelName="State Living in" />
            <TextInput labelName="City Living in" />
            <TextInput labelName="Residency Status" />
            <TextInput labelName="Zip / Pin Code" />
            <TextInput labelName="Birth Place" />
            <TextInput labelName="Grew up in" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Partner Education Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Highest Degree" />
            <TextInput labelName="College Name" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Partner Career Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Working Status" />
            <TextInput labelName="Working With" />
            <TextInput labelName="Employer Name" />
            <TextInput labelName="Working As" />
            <TextInput labelName="Annual Income" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPartnerBasicDetails;
