/* eslint-disable react/prop-types */

const TotalCardMatrimony = ({ icon, count, cardName }) => {
  return (
    <>
      <div className="TotalCardMatrimony">
        <div className="icon">
          <div className="iconSvg">{icon}</div>
        </div>
        <div className="txt">
          <h6>{count}</h6>
          <p>{cardName}</p>
        </div>
      </div>
    </>
  );
};

export default TotalCardMatrimony;
