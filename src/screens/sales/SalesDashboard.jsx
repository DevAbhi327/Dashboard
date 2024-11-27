import "../../styles/sales/SalesDashboard.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { PiWalletBold } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { FiDollarSign } from "react-icons/fi";
import RevenueSmallCard from "../../components/sales/RevenueSmallCard";
import MixedLineSalesColumnChart from "../../components/ui/graph/MixedLineSalesColumnChart";
import RadarMultiseriesChart from "../../components/ui/graph/RadarMultiseriesChart";
import DataTable from "react-data-table-component";
import { recentOrderColumns, recentOrderList } from "../../constants/dummy/MatrimonyRecentOrderContent";

const SalesDashboard = () => {
  // dummy total sales data
  const salesData = [
    {
      name: "Sales",
      count: "₹32,981",
      totalName: "Since last month",
      totalValue: "0.45%",
      icon: <RiShoppingBagLine />,
    },
    {
      name: "Profit",
      count: "₹645",
      totalName: "than last month",
      totalValue: "0.45%",
      icon: <PiWalletBold />,
    },
    {
      name: "Revenue",
      count: "₹14,32,145",
      totalName: "Since last month",
      totalValue: "0.45%",
      icon: <PiUserBold />,
    },
    {
      name: "Users",
      count: "1,04,678",
      totalName: "Since last month",
      totalValue: "0.45%",
      icon: <FiDollarSign />,
    },
  ];

  return (
    <>
      <div className="SalesDashboard">
        {/* top cards */}
        <div className="top_cards">
          {salesData?.map((e, i) => {
            return (
              <RevenueSmallCard
                key={i}
                name={e.name}
                count={e.count}
                totalName={e.totalName}
                totalValue={e.totalValue}
                icon={e.icon}
              />
            );
          })}
        </div>
        {/* top */}
        <div className="top_container">
          {/* SALES STATISTICS */}
          <div className="innerBox statistics">
            <div className="boxHead">
              <h6 className="heading">SALES STATISTICS</h6>
              <select className="sortBy" name="" id="">
                <option value="">Sort By</option>
              </select>
            </div>
            <div className="boxBody">
              <div className="graphContainer">
                <MixedLineSalesColumnChart />
              </div>
            </div>
          </div>
          {/* TOP SELLING CATEGORIES */}
          <div className="innerBox categories">
            <div className="boxHead">
              <h6 className="heading">TOP SELLING CATEGORIES</h6>
            </div>
            <div className="boxBody">
              <div className="graphContainer">
                <RadarMultiseriesChart />
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="center_container">
        <div className="innerBox recent">
          <div className="boxHead">
            <h6 className="heading">RECENT ORDERS</h6>
            <div className="search">
                <input className="headSearch" type="text" placeholder="Search Here" />
                <select className="sortBy" name="" id="">
                  <option value="">Sort By</option>
                </select>
              </div>
          </div>
          <div className="dataTable_box">
          <DataTable
            columns={recentOrderColumns.column} // dummy data
            data={recentOrderList.data}
            selectableRows
            pagination
            className="recentOrderTable dataTable_main"
          />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboard;
