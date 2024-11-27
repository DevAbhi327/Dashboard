import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../styles/matrimony/MatrimonyUserProfile.css";
import profileBanner from "../../assets/matrimony/profileBanner.jpg";
import userPic from "../../assets/matrimony/userPic.jpg";
import verifiedTick from "../../assets/matrimony/verifiedTick.jpg";
import { RiBuildingLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import TotalCardMatrimony from "../../components/ui/TotalCardMatrimony";
import { LuUserPlus } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { LuUserCheck } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import userPngPic from "../../assets/userPng.png";
import MatrimonyGeneralDetails from "../../components/matrimony/MatrimonyGeneralDetails";
import MatrimonyConnections from "../../components/matrimony/MatrimonyConnections";
import MatrimonyUserDetailTab from "../../components/matrimony/MatrimonyUserDetailTab";
import MatrimonyUserEditDetailTab from "../../components/matrimony/MatrimonyUserEditDetailTab";
import MatrimonyUserTimeline from "../../components/matrimony/MatrimonyUserTimeline";
import MatrimonyUserGallery from "../../components/matrimony/MatrimonyUserGallery";
import userCardPic from "../../assets/matrimony/rajatPic.jpg";
import UserConnectionCard from "../../components/matrimony/UserConnectionCard";
import MatrimonyUserCustomPlan from "./MatrimonyUserCustomPlan";

const MatrimonyUserProfile = () => {
  // dummy user counts
  const userCountsData = [
    {
      icon: <LuUserPlus />,
      count: "113",
      cardName: "Total Invitation Send",
    },
    {
      icon: <FiUsers />,
      count: "12.2k",
      cardName: "Total Connection",
    },
    {
      icon: <LuUserCheck />,
      count: "128",
      cardName: "Total Accepted by User",
    },
    {
      icon: <LuEye />,
      count: "128",
      cardName: "Total Profile Visitor",
    },
  ];

  //dummy user connection
  const userConnection = [
    {
      name: "Rajat Pradhan",
      userPic: userPngPic,
    },
    {
      name: "Rajat Pradhan",
      userPic: userPngPic,
    },
    {
      name: "Rajat Pradhan",
      userPic: userPngPic,
    },
    {
      name: "Rajat Pradhan",
      userPic: userPngPic,
    },
    {
      name: "Rajat Pradhan",
      userPic: userPngPic,
    },
  ];

  // dummy user connection data
  const connectionData = [
    {
      id: 1,
      pic: userCardPic,
      name: "Rajat Pradhan",
      religious: "Hindu, Kayasath",
      caste: "Saxena",
    },
    {
      id: 2,
      pic: userCardPic,
      name: "Ananya Sharma",
      religious: "Hindu, Brahmin",
      caste: "Sharma",
    },
    {
      id: 3,
      pic: userCardPic,
      name: "Arjun Patel",
      religious: "Hindu, Patel",
      caste: "Patel",
    },
    {
      id: 4,
      pic: userCardPic,
      name: "Sneha Agarwal",
      religious: "Hindu, Agarwal",
      caste: "Agarwal",
    },
    {
      id: 5,
      pic: userCardPic,
      name: "Vikram Singh",
      religious: "Hindu, Rajput",
      caste: "Singh",
    },
    {
      id: 6,
      pic: userCardPic,
      name: "Priya Desai",
      religious: "Hindu, Desai",
      caste: "Desai",
    },
    {
      id: 7,
      pic: userCardPic,
      name: "Ravi Kumar",
      religious: "Hindu, Kumar",
      caste: "Kumar",
    },
    {
      id: 8,
      pic: userCardPic,
      name: "Meera Rao",
      religious: "Hindu, Rao",
      caste: "Rao",
    },
    {
      id: 9,
      pic: userCardPic,
      name: "Suresh Reddy",
      religious: "Hindu, Reddy",
      caste: "Reddy",
    },
    {
      id: 10,
      pic: userCardPic,
      name: "Kavita Mehta",
      religious: "Hindu, Mehta",
      caste: "Mehta",
    },
  ];

  

  return (
    <>
      <div className="MatrimonyUserProfile">
        {/* banner profile */}
        <div className="innerBox profileBanner">
          <div className="boxBody">
            <div className="bannerImg">
              <img src={profileBanner} alt="" />
            </div>
            <div className="content">
              <div className="userPic">
                <img src={userPic} alt="" />
              </div>
              <div className="leftContent">
                <span className="nameTick">
                  <h6 className="name">Rajat Pradhan</h6>
                  <img className="tickPng" src={verifiedTick} alt="" />
                </span>
                <p className="userStatus">Premium User</p>
                <span className="addRegion">
                  <p>
                    <RiBuildingLine /> Hindu (Brahman)
                  </p>
                  <p>
                    <HiOutlineLocationMarker /> Bhopal, Madhya Pradesh
                  </p>
                </span>
              </div>
              <div className="rightCards">
                {userCountsData?.map((e, i) => {
                  return (
                    <TotalCardMatrimony
                      cardName={e.cardName}
                      count={e.count}
                      icon={e.icon}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* innner part */}
        <div className="center_container">
          <div className="container_left">
            <Tabs defaultActiveKey="Details" className="userProfileTab">
              <Tab
                className="userProfileTab_body"
                eventKey="Details"
                title="Details"
              >
                <div className="tab_body">
                  <MatrimonyUserDetailTab />
                </div>
              </Tab>
              <Tab
                className="userProfileTab_body"
                eventKey="EditProfile"
                title="Edit Profile"
              >
                <div className="tab_body">
                  <MatrimonyUserEditDetailTab />
                </div>
              </Tab>
              <Tab
                className="userProfileTab_body"
                eventKey="Timeline"
                title="Timeline"
              >
                <div className="tab_body">
                  <MatrimonyUserTimeline />
                </div>
              </Tab>
              <Tab
                className="userProfileTab_body"
                eventKey="Gallery"
                title="Gallery"
              >
                <div className="tab_body">
                  <MatrimonyUserGallery />
                </div>
              </Tab>
              <Tab
                className="userProfileTab_body"
                eventKey="Connections"
                title="Connections"
              >
                <div className="tab_body">
                  <div className="userConnectionCards">
                    {connectionData?.map((e, i) => {
                      return (
                        <UserConnectionCard
                          key={i}
                          cast={e.caste}
                          name={e.name}
                          pic={e.pic}
                        />
                      );
                    })}
                  </div>
                </div>
              </Tab>
              <Tab
                className="userProfileTab_body"
                eventKey="customPlan"
                title="Custom Plan"
              >
                <div className="tab_body">
                  <MatrimonyUserCustomPlan />
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="container_right">
            {/* general details */}
            <MatrimonyGeneralDetails />

            {/* Connections */}
            <MatrimonyConnections data={userConnection} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyUserProfile;
