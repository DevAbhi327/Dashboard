import { Route, Routes } from "react-router-dom";
import DashboardMain from "../dashboardMain/DashboardMain";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MatrimonyDashboard from "../matrimony/MatrimonyDashboard";
import MatrimonyUserProfile from "../matrimony/MatrimonyUserProfile";
import MatrimonyUserConnectionList from "../matrimony/MatrimonyUserConnectionList";
import MatrimonyVerificationList from "../matrimony/MatrimonyVerificationList";
import MatrimonyVerificationDetail from "../matrimony/MatrimonyVerificationDetail";
import SalesDashboard from "../sales/SalesDashboard";
import MatrimonyChatSupport from "../matrimony/MatrimonyChatSupport";
import AddEvents from "../events/AddEvents";
import AddNewSubscription from "../matrimony/AddNewSubscription";
import ProfileSetting from "../matrimony/ProfileSetting";
import OverallUserCustomPlan from "../matrimony/OverallUserCustomPlan";
import AddAndManageFaqs from "../contentManagement/AddAndManageFaqs";
import AllFaqs from "../contentManagement/AllFaqs";
import ApplicationFeedback from "../contentManagement/ApplicationFeedback";
import PlateformTermAndCondition from "../contentManagement/PlateformTermAndCondition";
import EventCalendar from "../events/EventCalendar";

const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<DashboardMain  innerScreen={<MatrimonyDashboard />}/>} />
        <Route
          path={AuthenticatedRoutes.MATRIMONY_DASHBOARD}
          element={
            <DashboardMain
            innerScreen={<MatrimonyDashboard />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.MATRIMONY_USERLIST}
          element={
            <DashboardMain
            innerScreen={<MatrimonyUserConnectionList />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.MATRIMONY_PROFILE}
          element={
            <DashboardMain
            innerScreen={<MatrimonyUserProfile />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.MATRIMONY_VERIFICATION_LIST}
          element={
            <DashboardMain
            innerScreen={<MatrimonyVerificationList />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.MATRIMONY_VERIFICATION_DETAIL}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<MatrimonyVerificationDetail />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.VIEW_ALL_SUBSCRIPTIONS_PLAN}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<OverallUserCustomPlan />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.ADD_NEW_SUBSCRIPTION}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<AddNewSubscription />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.SALES_MANAGEMENT}
          element={
            <DashboardMain
            clsName='white'

            innerScreen={<SalesDashboard />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.CHAT_SUPPORT}
          element={
            <DashboardMain
            innerScreen={<MatrimonyChatSupport />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.ADD_EVENT}
          element={
            <DashboardMain
            innerScreen={<AddEvents />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.EVENT_CALENDAR}
          element={
            <DashboardMain
            innerScreen={<EventCalendar />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.PROFILE_SETTING}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<ProfileSetting />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.ADD_AND_MANAGE_FAQS}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<AddAndManageFaqs />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.ALL_FAQS}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<AllFaqs />}
            />
          }
        />
        {/* <Route
          path={AuthenticatedRoutes.APPLICATION_FEEDBACK}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<ApplicationFeedback />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.PLATFORM_TERMS_AND_CONDITIONS}
          element={
            <DashboardMain
            clsName='white'
            innerScreen={<PlateformTermAndCondition />}
            />
          }
        /> */}
      </Routes>
    </>
  );
};

export default Authenticate;
