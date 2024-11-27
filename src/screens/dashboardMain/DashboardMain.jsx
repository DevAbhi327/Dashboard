import Header from "../../components/header/Header";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import "../../styles/dashboardMain/DashboardMain.css";
import '../../styles/UiStyle/UiStyle.css'

// eslint-disable-next-line react/prop-types
const DashboardMain = ({innerScreen, clsName}) => {
  return (
    <>
      <div className="DashboardMain">
        <div className="DashboardMain_inner">
          {/* sidemenu */}
          <Sidemenu />
          {/* right side screen */}
          <div className="rightSide">
            <Header />
            <div className={`dashboardFrame ${clsName && clsName}`}>
                <div className="frame_inner">
            {innerScreen}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
