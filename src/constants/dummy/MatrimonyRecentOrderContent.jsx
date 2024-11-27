/* eslint-disable no-unused-vars */
import { FiEye } from "react-icons/fi";
import { CgSoftwareDownload } from "react-icons/cg";
import userImg from '../../assets/userPng.png'
import { Link } from "react-router-dom";

export const recentOrderColumns = {
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
      name: "Plan",
      selector: (row) => row.plan,
    },
    {
      name: "Status",
      selector: (row) => <><span className={`castHighlight ${row.status==='Pending' ? 'pending' : row.status==='Cancelled' ? 'failed' : 'success'}`}>{row.status}</span></>,
    },
    {
      name: "Order Id",
      selector: (row) => row.orderId,
    },
    {
      name: "Month",
      selector: (row) => row.month,
    },
    {
      name: "Date Ordered",
      selector: (row) => row.dateOrdered,
    },
    {
      name: "Method",
      selector: (row) => row.method,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionBtns">
          <button className="down">
            <CgSoftwareDownload />
          </button>
          <Link to="">
            <button className="eye">
              <FiEye />
            </button>
          </Link>
        </div>
      ),
    },
  ],
};

export const recentOrderList = {
   data : [
    {
      id: 1,
      pic: userImg,
      name: "Rajat Pradhan",
      plan: "Gold",
      status: "Pending",
      orderId: "#5424581135",
      month: "6",
      dateOrdered: "27 Sep 2024",
      method: "UPI",
      price: "15,000",
      action: [],
    },
    {
      id: 2,
      pic: userImg,
      name: "Ananya Sharma",
      plan: "Silver",
      status: "Completed",
      orderId: "#5424581136",
      month: "7",
      dateOrdered: "15 Oct 2024",
      method: "Credit Card",
      price: "8,000",
      action: [],
    },
    {
      id: 3,
      pic: userImg,
      name: "Arjun Patel",
      plan: "Platinum",
      status: "Pending",
      orderId: "#5424581137",
      month: "8",
      dateOrdered: "01 Nov 2024",
      method: "Debit Card",
      price: "20,000",
      action: [],
    },
    {
      id: 4,
      pic: userImg,
      name: "Sneha Agarwal",
      plan: "Gold",
      status: "Cancelled",
      orderId: "#5424581138",
      month: "9",
      dateOrdered: "20 Nov 2024",
      method: "Net Banking",
      price: "12,000",
      action: [],
    },
    {
      id: 5,
      pic: userImg,
      name: "Vikram Singh",
      plan: "Silver",
      status: "Completed",
      orderId: "#5424581139",
      month: "10",
      dateOrdered: "05 Dec 2024",
      method: "UPI",
      price: "6,000",
      action: [],
    },
    {
      id: 6,
      pic: userImg,
      name: "Priya Desai",
      plan: "Platinum",
      status: "Pending",
      orderId: "#5424581140",
      month: "11",
      dateOrdered: "15 Dec 2024",
      method: "Credit Card",
      price: "25,000",
      action: [],
    },
    {
      id: 7,
      pic: userImg,
      name: "Ravi Kumar",
      plan: "Gold",
      status: "Completed",
      orderId: "#5424581141",
      month: "12",
      dateOrdered: "30 Dec 2024",
      method: "Debit Card",
      price: "18,000",
      action: [],
    },
    {
      id: 8,
      pic: userImg,
      name: "Meera Rao",
      plan: "Silver",
      status: "Pending",
      orderId: "#5424581142",
      month: "1",
      dateOrdered: "10 Jan 2025",
      method: "Net Banking",
      price: "7,500",
      action: [],
    },
    {
      id: 9,
      pic: userImg,
      name: "Suresh Reddy",
      plan: "Platinum",
      status: "Cancelled",
      orderId: "#5424581143",
      month: "2",
      dateOrdered: "20 Feb 2025",
      method: "UPI",
      price: "22,000",
      action: [],
    },
    {
      id: 10,
      pic: userImg,
      name: "Kavita Mehta",
      plan: "Gold",
      status: "Completed",
      orderId: "#5424581144",
      month: "3",
      dateOrdered: "05 Mar 2025",
      method: "Credit Card",
      price: "16,000",
      action: [],
    },
  ]
  
};

