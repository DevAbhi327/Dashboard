import { AuthenticatedRoutes } from "../Routes";
import { RiHomeLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineChartBar } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";
import { LuBarChart3 } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdManageHistory, MdPlaylistAddCheck } from "react-icons/md";


export const SidemenuContent = [
  {
    name: "Matrimony",
    icon: <RiHomeLine />,
    option: [
      {
        name: "Dashboard",
        link: AuthenticatedRoutes.DASHBOARD,
      },
      
    ],
  },
  {
    name: "All User List",
    icon: <LuUser2 />,
    option: [
      {
        name: "User lists",
        link: AuthenticatedRoutes.MATRIMONY_USERLIST,
      },
    ],
  },
  {
    name: "User Verification List",
    icon: <MdPlaylistAddCheck />,
    option: [
      {
        name: "Verification List",
        link: AuthenticatedRoutes.MATRIMONY_VERIFICATION_LIST,
      },
    ],
  },
  {
    name: "Subscription Management",
    icon: <HiOutlineChartBar />,
    option: [
      {
        name: "Add New Subscription",
        link: AuthenticatedRoutes.ADD_NEW_SUBSCRIPTION,
      },
      {
        name: "View All Subscriptions",
        link: AuthenticatedRoutes.VIEW_ALL_SUBSCRIPTIONS_PLAN,
      },
    ],
  },
 
  {
    name: "Event Management",
    icon: <FiCalendar />,
    option: [
      {
        name: "Add Event",
        link: AuthenticatedRoutes.ADD_EVENT,
      },
      {
        name: "Event Calendar",
        link: AuthenticatedRoutes.EVENT_CALENDAR,
      },
    ],
  },
  // {
  //   name: "Email Management",
  //   icon: <MdOutlineMailOutline />,
  //   option: [
  //     {
  //       name: "Dashboard",
  //       link: '',
  //     },
  //   ],
  // },
  {
    name: "Sales Management",
    icon: <LuBarChart3 />,
    option: [
      {
        name: "Dashboard",
        link: AuthenticatedRoutes.SALES_MANAGEMENT,
      },
      {
        name: "Profile Setting",
        link: AuthenticatedRoutes.PROFILE_SETTING,
      },
    ],
  },
  {
    name: "Customer Support",
    icon: <RiCustomerService2Line />,
    option: [
      {
        name: "Chat Support",
        link: AuthenticatedRoutes.CHAT_SUPPORT,
      },
    ],
  },
  {
    name: "Content Management",
    icon: <MdManageHistory />,
    option: [
      {
        name: "Add & Manage Faq's",
        link: AuthenticatedRoutes.ADD_AND_MANAGE_FAQS,
      },
      {
        name: "All Faq's",
        link: AuthenticatedRoutes.ALL_FAQS,
      },
      // {
      //   name: "Application Feedback",
      //   link: AuthenticatedRoutes.APPLICATION_FEEDBACK,
      // },
      // {
      //   name: "Add & Manage Platform Terms & Conditions",
      //   link: AuthenticatedRoutes.PLATFORM_TERMS_AND_CONDITIONS,
      // },
    ],
  },
];
