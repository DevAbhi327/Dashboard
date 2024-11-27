import { useState } from "react";
import TotalCountPopup from "../ui/allPopups/TotalCountPopup";
import SparkLineChart from "../ui/graph/SparkLineChart";

/* eslint-disable react/prop-types */
const MatrimonyUserCountCard = ({
  icon,
  cardTitle,
  totalCount,
  percent,
  color,
  id,
}) => {
  const [showCountModal, setShowCountModal] = useState({
    open: false,
    id: "",
  });
  return (
    <>
      <div
        className="MatrimonyUserCountCard innerBox"
        onClick={() => {
          setShowCountModal({ open: true, id: id });
        }}
      >
        <div className="content">
          <div className="iconBox">
            <div className="icon">{icon}</div>
          </div>
          <p className="title">{cardTitle}</p>
          <div className="totalCount">
            <span>{totalCount}</span>
            <span>{percent}</span>
          </div>
        </div>
        {/* graph */}
        <div className="sm_graph">
          <SparkLineChart color={color} />
        </div>
      </div>
      {showCountModal?.open &&
        showCountModal?.id === "totalUser" ? <TotalCountPopup show={showCountModal?.open} onHide={()=>{setShowCountModal({open:false, id:''})}} /> : null}
    </>
  );
};

export default MatrimonyUserCountCard;
