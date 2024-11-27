/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";

const PopularClassCard = ({courseImg, courseCategory, courseName, faculityName}) => {
  return (
    <>
      <div className="PopularClassCard">
        <div className="courseImg">
        <img src={courseImg} alt="" />
        </div>
        <div className="txt">
            <p className="category">{courseCategory}</p>
            <h6 className="name">{courseName}</h6>
            <div className="other">
                <p>Course By {faculityName}</p>
                <p>2,189 views</p>
                <div className="star"><MdOutlineStar /> (4.2)</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
