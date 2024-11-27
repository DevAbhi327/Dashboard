import DataTable from "react-data-table-component";
import { getAllUserForVerification } from "../../api/user-verification-api";
import { useEffect, useState } from "react";
import ScreenLoader from "../../components/ui/ScreenLoader";
import userImg from "../../assets/userPng.png";
import { CgSoftwareDownload } from "react-icons/cg";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { dateFormatHandler } from "../../utils/date-formatter";

const MatrimonyVerificationList = () => {
  const [allVerificationList, setAllVerificationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchAllUserForVerification = async () => {
    setLoading(true);

    try {
      const users = await getAllUserForVerification();
      setAllVerificationList(users);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllUserForVerification();
  }, []);

  const verificationColumns = [
    {
      name: "Name",
      selector: (row) => (
        <div className="namePic">
          <div className="pic">
            <img
              src={row?.profilePhotoUrl ? row?.profilePhotoUrl : userImg}
              alt=""
            />
          </div>
          <p>{row?.name}</p>
        </div>
      ),
    },
    {
      name: "Gender",
      selector: (row) => row?.gender,
    },
    {
      name: "DoB",
      selector: (row) => dateFormatHandler(row?.dob),
    },
    {
      name: "Religion",
      selector: (row) => row?.religion,
    },
    {
      name: "Caste",
      selector: (row) => row?.caste,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionBtns">
          <button className="down">
            <CgSoftwareDownload />
          </button>
          <button
            onClick={() =>
              navigateUserProfileHandler({
                caste: row?.caste,
                dob: row?.dob,
                gender: row?.gender,
                name: row?.name,
                profilePhotoUrl: row?.profilePhotoUrl,
                religion: row?.religion,
                userId: row?.userId,
                verificationDocPhotoUrl: row?.verificationDocPhotoUrl,
                verificationFrontPhotoUrl: row?.verificationFrontPhotoUrl,
                verificationIdPhotoBackUrl: row?.verificationIdPhotoBackUrl,
                verificationLeftPhotoUrl: row?.verificationLeftPhotoUrl,
                verificationRightPhotoUrl: row?.verificationRightPhotoUrl,
              })
            }
            className="eye"
          >
            <FiEye />
          </button>
        </div>
      ),
    },
  ];

  const navigateUserProfileHandler = (data) => {
    navigate(AuthenticatedRoutes.MATRIMONY_VERIFICATION_DETAIL, {
      state: {
        userData: data,
      },
    });
  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="MatrimonyRegularUserList tableListMain">
        <div className="innerBox">
          <div className="boxHead">
            <h6 className="heading">Verification List</h6>
            {/* <span className="filter">
              Filter <LuChevronsLeftRight />
            </span> */}
          </div>
          <div className="dataTable_box">
            <DataTable
              columns={verificationColumns}
              data={allVerificationList}
              selectableRows
              pagination
              className="MatrimonyRegularUserListTable dataTable_main"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyVerificationList;
