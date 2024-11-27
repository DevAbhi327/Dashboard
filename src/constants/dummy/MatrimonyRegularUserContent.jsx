/* eslint-disable no-unused-vars */
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CgSoftwareDownload } from "react-icons/cg";
import userPng from '../../assets/matrimony/rajatPic.jpg'
import { AuthenticatedRoutes } from "../Routes";

export const regularUserColumns = {
  column: [
    {
      name: "Name",
      selector: (row) => (
        <div className="namePic">
          <div className="pic"><img src={row.pic} alt="" /></div>
          <p>{row.name}</p>
        </div>
      ),
    },
    {
      name: "Religious",
      selector: (row) => row.religious,
    },
    {
      name: "Caste",
      selector: (row) => <><span className="castHighlight">{row.caste}</span></>,
    },
    {
      name: "Gmail",
      selector: (row) => row.gmailId,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Contact",
      selector: (row) => row.contactNo,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionBtns">
          <button className="down">
            <CgSoftwareDownload />
          </button>
          <Link to={AuthenticatedRoutes.MATRIMONY_PROFILE}>
            <button className="eye">
              <FiEye />
            </button>
          </Link>
        </div>
      ),
    },
  ],
};

export const regularUserList = {
  data: [
    {
      id: 1,
      pic: userPng,
      name: "Rajat Pradhan",
      religious: "Hindu, Kayasath",
      caste: "Saxena",
      gmailId: "prajat917@gmail.com",
      location: "Bhopal, M.P",
      contactNo: "+91 7024393158",
      action: [],
    },
    {
      id: 2,
      pic: userPng,
      name: "Ananya Sharma",
      religious: "Hindu, Brahmin",
      caste: "Sharma",
      gmailId: "ananya.sharma@example.com",
      location: "Delhi, NCT",
      contactNo: "+91 9876543210",
      action: [],
    },
    {
      id: 3,
      pic: userPng,
      name: "Arjun Patel",
      religious: "Hindu, Patel",
      caste: "Patel",
      gmailId: "arjun.patel@example.com",
      location: "Ahmedabad, Gujarat",
      contactNo: "+91 9123456789",
      action: [],
    },
    {
      id: 4,
      pic: userPng,
      name: "Sneha Agarwal",
      religious: "Hindu, Agarwal",
      caste: "Agarwal",
      gmailId: "sneha.agarwal@example.com",
      location: "Lucknow, U.P",
      contactNo: "+91 9000000000",
      action: [],
    },
    {
      id: 5,
      pic: userPng,
      name: "Vikram Singh",
      religious: "Hindu, Rajput",
      caste: "Singh",
      gmailId: "vikram.singh@example.com",
      location: "Jaipur, Rajasthan",
      contactNo: "+91 8000000000",
      action: [],
    },
    {
      id: 6,
      pic: userPng,
      name: "Priya Desai",
      religious: "Hindu, Desai",
      caste: "Desai",
      gmailId: "priya.desai@example.com",
      location: "Mumbai, Maharashtra",
      contactNo: "+91 8500000000",
      action: [],
    },
    {
      id: 7,
      pic: userPng,
      name: "Ravi Kumar",
      religious: "Hindu, Kumar",
      caste: "Kumar",
      gmailId: "ravi.kumar@example.com",
      location: "Bengaluru, Karnataka",
      contactNo: "+91 7000000000",
      action: [],
    },
    {
      id: 8,
      pic: userPng,
      name: "Meera Rao",
      religious: "Hindu, Rao",
      caste: "Rao",
      gmailId: "meera.rao@example.com",
      location: "Hyderabad, Telangana",
      contactNo: "+91 7500000000",
      action: [],
    },
    {
      id: 9,
      pic: userPng,
      name: "Suresh Reddy",
      religious: "Hindu, Reddy",
      caste: "Reddy",
      gmailId: "suresh.reddy@example.com",
      location: "Chennai, Tamil Nadu",
      contactNo: "+91 7200000000",
      action: [],
    },
    {
      id: 10,
      pic: userPng,
      name: "Kavita Mehta",
      religious: "Hindu, Mehta",
      caste: "Mehta",
      gmailId: "kavita.mehta@example.com",
      location: "Pune, Maharashtra",
      contactNo: "+91 7400000000",
      action: [],
    },
  ],
};
