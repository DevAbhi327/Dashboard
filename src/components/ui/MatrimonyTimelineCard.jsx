/* eslint-disable react/prop-types */
const MatrimonyTimelineCard = ({ cardImg, title, description }) => {
  return (
    <>
      <div className="MatrimonyTimelineCard">
        {cardImg && (
          <div className="cardImg">
            <img src={cardImg} alt="" />
          </div>
        )}
        <div className="txt">
          <h5 className="title">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default MatrimonyTimelineCard;
