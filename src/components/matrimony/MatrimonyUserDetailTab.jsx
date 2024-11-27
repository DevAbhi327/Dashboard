import KeyValueType from "../ui/KeyValueType";
import UserSocialMediaCard from "../ui/UserSocialMediaCard";
import instaIcon from "../../assets/socialIcon/insta.jpg";
import facebookIcon from "../../assets/socialIcon/facebook.jpg";
import linkdeinIcon from "../../assets/socialIcon/linkedln.jpg";
import whatsappIcon from "../../assets/socialIcon/whatsapp.jpg";

/* eslint-disable react/no-unescaped-entities */
const MatrimonyUserDetailTab = () => {
  //dummy user social media detail
  const socialDetail = [
    {
      icon: instaIcon,
      plateformName: "Instagram",
      targetLink: "https://www.instagram.com/rajatpradhna225/",
    },
    {
      icon: facebookIcon,
      plateformName: "Facebook",
      targetLink: "https://faceook.com/rajatpradhan1050",
    },
    {
      icon: linkdeinIcon,
      plateformName: "Linkedin",
      targetLink: "https://linkedin.com/in/rajatpradhan",
    },
    {
      icon: whatsappIcon,
      plateformName: "WhatsApp",
      targetLink: "+91 7024393158",
    },
  ];
  return (
    <>
      <div className="MatrimonyUserDetailTab">
        <div className="tab_innerBox">
          <h6 className="heading">About Rajat :</h6>
          <div className="keyValue_container">
            <p className="value">
              Hey there! I'm [Your Name], a passionate [Your
              Profession/Interest] based in [Your Location]. With a love for
              [Your Hobbies/Interests], I find joy in exploring the beauty of
              [Your Industry/Field]. Whether it's [Specific Skills or
              Expertise], I'm always eager to learn and grow. <br /> I
              specialize in [Your Specialization/Area of Expertise], bringing
              creativity and innovation to every project. From [Key
              Achievements] to Notable Experiences], my journey has been a
              thrilling ride, and I'm excited to share it with you.
            </p>
          </div>
        </div>
        {/* Basic Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Basic Details :</h6>
          <div className="keyValue_container">
            <KeyValueType keyName="Name" value="Rajat Pradhan" />
            <KeyValueType keyName="Marital Status" value="Awaiting" />
            <KeyValueType keyName="No. of children" value="2 Child" />
            <KeyValueType keyName="Height" value="6'0 ft (184cm)" />
            <KeyValueType keyName="Any Disability" value="NO" />
            <KeyValueType keyName="Health Information" value="Excellent" />
          </div>
        </div>

        {/* Religious Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Religious Details :</h6>
          <div className="keyValue_container">
            <KeyValueType keyName="Religion" value="Hindu" />
            <KeyValueType keyName="Mother Tongue" value="Hindi" />
            <KeyValueType keyName="Community" value="Kayastha" />
            <KeyValueType keyName="Sub Community" value="Saxena" />
            <KeyValueType keyName="Caste No Bar" value="Not Specified" />
            <KeyValueType keyName="Gothra / Gothram" value="Not Specified" />
          </div>
        </div>

        {/* Family Details : */}
        <div className="tab_innerBox">
          <h6 className="heading">Family Details :</h6>
          <div className="keyValue_container">
            <KeyValueType keyName="Mother's Details" value="Employed" />
            <KeyValueType keyName="Father's Details" value="Employed" />
            <KeyValueType keyName="No. of Sisters" value="0" />
            <KeyValueType keyName="No. of Brothers" value="0" />
            <KeyValueType keyName="Family Financial Status " value="0" />
          </div>
        </div>

        {/* Interest : */}
        <div className="tab_innerBox">
          <h6 className="heading">Interest :</h6>
          <div className="keyValue_container">
            <span className="interestTag">Project Management</span>
            <span className="interestTag">Data Analysis</span>
            <span className="interestTag">Marketing Strategy</span>
            <span className="interestTag">Graphic Design</span>
            <span className="interestTag">Content Creation</span>
            <span className="interestTag">Market Research</span>
            <span className="interestTag">Client Relations</span>
            <span className="interestTag">Event Planning</span>
            <span className="interestTag">Budgeting and Finance</span>
            <span className="interestTag">Negotiation Skills</span>
            <span className="interestTag">Team Collaboration</span>
            <span className="interestTag">Adaptability</span>
          </div>
        </div>

        {/* Social Media : */}
        <div className="tab_innerBox">
          <h6 className="heading">Social Media :</h6>
          <div className="keyValue_container social">
            {socialDetail?.map((e, i) => {
              return (
                <UserSocialMediaCard
                  key={i}
                  socialIcon={e.icon}
                  socialName={e.plateformName}
                  target={e.targetLink}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyUserDetailTab;
