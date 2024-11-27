/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
const OnlineTotalCard = ({ topicName, value, percentCount, icon, profit }) => {
  return (
    <>
      <div className="OnlineTotalCard">
        <div className="txt">
          <h6 className="topic">{topicName}</h6>
          <h5 className="value">{value}</h5>
          <p className="month">
            This Month &nbsp;
            {profit ? (
              <span className="count profit">
                <IoMdArrowUp /> {percentCount}
              </span>
            ) : (
              <span className="count loss">
                <IoArrowDownSharp /> {percentCount}
              </span>
            )}
          </p>
        </div>
        <div className="iconBox">
          <div className="icon">{icon}</div>
        </div>
      </div>
    </>
  );
};

export default OnlineTotalCard;
