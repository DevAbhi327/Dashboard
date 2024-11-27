
/* eslint-disable react/prop-types */
const RevenueSmallCard = ({ name, count, totalName, totalValue , icon}) => {
  return (
    <>
      <div className="RevenueSmallCard innerBox">
       
        <div className="text">
          <h5 className="name">{name}</h5>
          <h6 className="heading">{count}</h6>
          <p className="total">
             <span> {totalValue} </span> {totalName}
          </p>
         
        </div>
        <div className="imgIcon">
          <div className="icon">{icon}</div>
        </div>
      </div>
    </>
  );
};

export default RevenueSmallCard;
