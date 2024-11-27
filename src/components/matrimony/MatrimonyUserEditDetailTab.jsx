import KeyValueTypeInput from "../ui/KeyValueTypeInput";
import KeyValueTypeSelect from "../ui/KeyValueTypeSelect";
import { MdOutlineArrowRightAlt } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
const MatrimonyUserEditDetailTab = () => {
  //dummy user social media detail
  const socialDetail = [
    {
      plateformName: "Instagram",
      targetLink: "https://www.instagram.com/rajatpradhna225/",
    },
    {
      plateformName: "Facebook",
      targetLink: "https://faceook.com/rajatpradhan1050",
    },
    {
      plateformName: "Linkedin",
      targetLink: "https://linkedin.com/in/rajatpradhan",
    },
    {
      plateformName: "WhatsApp",
      targetLink: "+91 7024393158",
    },
  ];
  return (
    <>
      <div className=" MatrimonyUserEditDetailTab">
        <div className="tab_innerBox">
          <h6 className="heading">About Rajat :</h6>
          <div className="input_container">
            <textarea
              defaultValue="  Hey there! I'm [Your Name], a passionate [Your
              Profession/Interest] based in [Your Location]. With a love for
              [Your Hobbies/Interests], I find joy in exploring the beauty of
              [Your Industry/Field]. Whether it's [Specific Skills or
              Expertise], I'm always eager to learn and grow. <br /> I
              specialize in [Your Specialization/Area of Expertise], bringing
              creativity and innovation to every project. From [Key
              Achievements] to Notable Experiences], my journey has been a
              thrilling ride, and I'm excited to share it with you."
            />
          </div>
        </div>
        {/* Basic Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Basic Details :</h6>
          <div className="input_container">
            <KeyValueTypeInput keyName="Name" value="Rajat Pradhan" />
            <KeyValueTypeSelect keyName="Marital Status" value="Awaiting" />
            <KeyValueTypeSelect keyName="No. of children" value="2 Child" />
            <KeyValueTypeSelect keyName="Height" value="6'0 ft (184cm)" />
            <KeyValueTypeInput keyName="Any Disability" value="NO" />
            <KeyValueTypeSelect keyName="Health Information" value="Excellent" />
          </div>
        </div>

        {/* Religious Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Religious Details :</h6>
          <div className="input_container">
            <KeyValueTypeInput keyName="Religion" value="Hindu" />
            <KeyValueTypeInput keyName="Mother Tongue" value="Hindi" />
            <KeyValueTypeInput keyName="Community" value="Kayastha" />
            <KeyValueTypeInput keyName="Sub Community" value="Saxena" />
            <KeyValueTypeInput keyName="Caste No Bar" value="Not Specified" />
            <KeyValueTypeInput
              keyName="Gothra / Gothram"
              value="Not Specified"
            />
          </div>
        </div>

        {/* Family Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Family Details :</h6>
          <div className="input_container">
            <KeyValueTypeInput keyName="Mother's Details" value="Employed" />
            <KeyValueTypeInput keyName="Father's Details" value="Employed" />
            <KeyValueTypeInput keyName="No. of Sisters" value="0" />
            <KeyValueTypeInput keyName="No. of Brothers" value="0" />
            <KeyValueTypeInput keyName="Family Financial Status " value="0" />
          </div>
        </div>

        {/* Social Media : */}
        <div className="tab_innerBox">
          <h6 className="heading">Social Media :</h6>
          <div className="input_container full">
            {socialDetail?.map((e, i) => {
              return (
                <KeyValueTypeInput
                  key={i}
                  keyName={e.plateformName}
                  value={e.targetLink}
                />
              );
            })}
          </div>
        </div>
        <button className="update">Update <MdOutlineArrowRightAlt /></button>
      </div>
    </>
  );
};

export default MatrimonyUserEditDetailTab;
