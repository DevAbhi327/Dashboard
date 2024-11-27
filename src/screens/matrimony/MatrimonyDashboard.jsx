import MixedLineColumnChart from "../../components/ui/graph/MixedLineColumnChart";
import "../../styles/matrimony/MatrimonyDashboard.css";
import RadialCirclePieChart from "../../components/ui/graph/RadialCirclePieChart";
import DataTable from "react-data-table-component";
import MatrimonyUserCountCard from "../../components/matrimony/MatrimonyUserCountCard";
import { BiGroup } from "react-icons/bi";
import { PiUserCircleMinus } from "react-icons/pi";
import { FiEye, FiUserPlus } from "react-icons/fi";
import { FiUserMinus } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchRecentSubscriptions } from "../../utils/data-fetcher";
import {
  getAllRecentSubscriptions,
  getUserByReligion,
} from "../../api/dashboard-api";
import userImg from "../../assets/userPng.png";
import { CgSoftwareDownload } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import ScreenLoader from "../../components/ui/ScreenLoader";
import { getAllUserForVerification } from "../../api/user-verification-api";

const MatrimonyDashboard = () => {
  // dummy for request list
  const requestList = [
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
    {
      name: "Rajat Pradhan",
      cast: "Hindu,Kayasth,Saxena",
    },
  ];

  // dummy for user count details
  const overallCounts = [
    {
      icon: <BiGroup />,
      cardTitle: "Total User",
      totalCount: "13,666",
      percent: "0.66%",
      color: "#546DFE",
      id: "totalUser",
    },
    {
      icon: <PiUserCircleMinus />,
      cardTitle: "Inactive User",
      totalCount: "545",
      percent: "2.25%",
      color: "",
      id: "inactiveUser",
    },
    {
      icon: <FiUserPlus />,
      cardTitle: "New User",
      totalCount: "14,66",
      percent: "1.12%",
      color: "",
      id: "newUser",
    },
    {
      icon: <FiUserMinus />,
      cardTitle: "Bots",
      totalCount: "435",
      percent: "4.98%",
      color: "",
      id: "botsUser",
    },
  ];

  const [recentSubscriptions, setRecentSubscriptions] = useState([]);
  const [religionUser, setReligionUser] = useState([]);
  const [allRequestedUser, setAllRequestedUser] = useState([]);

  // recent subscription table data
  const recentSubscriptionColumns = [
    {
      name: "Name",
      selector: (row) => (
        <div className="namePic">
          <div className="pic">
            <img src={row?.pic ? row?.pic : userImg} alt="" />
          </div>
          <p>{row?.userName}</p>
        </div>
      ),
    },
    {
      name: "Plan",
      selector: (row) => row?.planName,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={`castHighlight ${
            row?.planStatus === "Pending"
              ? "pending"
              : row?.planStatus === "Cancelled"
              ? "failed"
              : "success"
          }`}
        >
          {row?.planStatus}
        </span>
      ),
    },
    {
      name: "Order Id",
      selector: (row) => row?.orderId,
    },
    {
      name: "Email",
      selector: (row) => row?.userEmail,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionBtns">
          <button className="down">
            <CgSoftwareDownload />
          </button>
          <button
            // onClick={() => navigateUserProfileHandler(row?.userId)}
            className="eye"
          >
            <FiEye />
          </button>
        </div>
      ),
    },
  ];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navigateUserProfileHandler = (data) => {
    navigate(AuthenticatedRoutes.MATRIMONY_VERIFICATION_DETAIL, {
      state: {
        userData: data,
      },
    });
  };

  const fetchAllUserForVerification = async () => {
    setLoading(true);

    try {
      const user = await getAllUserForVerification();
      setAllRequestedUser(user);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchRecentSubscriptions = async () => {
    setLoading(true);

    try {
      const recentSubscription = await getAllRecentSubscriptions();
      setRecentSubscriptions(recentSubscription);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserByReligion = async () => {
    setLoading(true);
  
    try {
      const data = await getUserByReligion();
      filterReligionHandler(data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  
  const filterReligionHandler = (data) => {
    const counts = data?.reduce((acc, item) => {
      acc[item?.religion] = (acc[item?.religion] || 0) + 1;
      return acc;
    }, {});
  
    const religionUserArray = counts 
      ? Object.entries(counts).map(([religion, count]) => ({
          religion,
          count,
        })) 
      : [];
  
    setReligionUser(religionUserArray);
  };
  

  useEffect(() => {
    fetchRecentSubscriptions();
    fetchUserByReligion();
    fetchAllUserForVerification();
  }, []);
  return (
    <>
      {loading && <ScreenLoader />}

      <div className="MatrimonyDashboard">
        {/* top */}
        <div className="top_container">
          <div className="fourCards">
            {overallCounts?.map((e, i) => {
              return (
                <MatrimonyUserCountCard
                  key={`fourCards-${i}`}
                  id={e.id}
                  color={e.color}
                  cardTitle={e.cardTitle}
                  icon={e.icon}
                  percent={e.percent}
                  totalCount={e.totalCount}
                />
              );
            })}
          </div>
          {/* SUBSCRIPTION OVERVIEW */}
          <div className="innerBox overview">
            <div className="boxHead">
              <h6 className="heading">SUBSCRIPTION OVERVIEW</h6>
              <select className="sortBy" name="" id="">
                <option value="">Sort By</option>
              </select>
            </div>
            <div className="boxBody">
              <div className="graphContainer">
                <MixedLineColumnChart />
              </div>
            </div>
          </div>
          {/* NEW REQUESTS */}
          <div className="innerBox request">
            <div className="boxHead">
              <h6 className="heading">NEW REQUESTS</h6>
              <Link to={AuthenticatedRoutes.MATRIMONY_VERIFICATION_LIST}>
              <button className="viewall">View All</button>
              </Link>
            </div>
            <div className="boxBody">
              {allRequestedUser?.length <7 && allRequestedUser?.map((e, i) => {
                return (
                  <div key={`request-${i}`} className="request_card">
                    <div className="details">
                      <h5 className="name">{e?.name}</h5>
                      <p className="cast">{e?.religion},{e?.caste}</p>
                    </div>
                    <div className="accept_btns">
                      <button onClick={()=>navigateUserProfileHandler(e)} className="view">
                        <MdOutlineRemoveRedEye />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* center */}
        <div className="center_container">
          <div className="innerBox recent">
            <div className="boxHead">
              <h6 className="heading">RECENT SUBSCRIPTIONS</h6>
              <div className="search">
                <input
                  className="headSearch"
                  type="text"
                  placeholder="Search Here"
                />
                <select className="sortBy" name="" id="">
                  <option value="">Sort By</option>
                </select>
              </div>
            </div>
            <div className="dataTable_box">
              <DataTable
                columns={recentSubscriptionColumns}
                data={recentSubscriptions}
                selectableRows
                pagination
                className="recentOrderTable dataTable_main"
              />
            </div>
          </div>

          {/* RELIGIOUS PERCENTAGE */}
          <div className="innerBox percentage">
            <div className="boxHead">
              <h6 className="heading">RELIGIOUS BY PERCENTAGE</h6>
            </div>
            <div className="boxBody">
              <div className="graphContainer">
                <RadialCirclePieChart seriesData={religionUser} />
              </div>
              <div className="values">
                {religionUser?.map((val, ind) => {
                  return (
                    <div key={`religionUser${ind}`} className="valueCard">
                      <div className="left">
                        <div className="circle"></div>
                        <p>{val?.religion}</p>
                      </div>
                      <h6 className="numberValue">{val?.count}</h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyDashboard;
