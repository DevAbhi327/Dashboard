import TextareaInput from "../ui/TextareaInput";
import TextInput from "../ui/TextInput";

const VerificationBasicDetails = () => {
  return (
    <>
      <div className="VerificationBasicDetails">
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Basic Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="First Name" />
            <TextInput labelName="Last Name" />
            <TextInput labelName="Age" />
            <TextInput labelName="Marital Status" />
            <TextInput labelName="No. of children" />
            <TextInput labelName="Height" />
            <TextInput labelName="Any Disability" />
            <TextInput labelName="Health Information" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">About Me</h6>
          </div>
            <TextareaInput value="I'm web designer, I work in programs like figma, adobe photoshop, adobe illustrator" />
        </div>

        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Religious Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Religion" />
            <TextInput labelName="Mother Tongue" />
            <TextInput labelName="Community" />
            <TextInput labelName="Sub Community" />
            <TextInput labelName="Caste No Bar" />
            <TextInput labelName="Gothra / Gothram" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Family Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Mother's Details" />
            <TextInput labelName="Father's Details" />
            <TextInput labelName="No. of Sisters" />
            <TextInput labelName="No. of Brothers" />
            <TextInput labelName="Family Financial Status" />
            <TextInput labelName="Family Annual Income" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Astro Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Manglik / Chevval / Dosham" />
            <TextInput labelName="Date of Birth" />
            <TextInput labelName="Time of Birth" />
            <TextInput labelName="City of Birth" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Location Details</h6>
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
            <h6 className="detailHeading">Education Details</h6>
          </div>
          <div className="inputBox">
            <TextInput labelName="Highest Degree" />
            <TextInput labelName="College Name" />
          </div>
        </div>
        <div className="box_container">
          <div className="head">
            <h6 className="detailHeading">Career Details</h6>
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

export default VerificationBasicDetails;
