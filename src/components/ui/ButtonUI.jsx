/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ShowHideEyeBtn = ({ toggleValue, toggle }) => {
  return (
    <>
      <button onClick={toggle} className="ShowHideEyeBtn">
        {toggleValue ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </>
  );
};


export const ButtonMain = ({ name, btnColor, link , onClick }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
        </Link>
      ) : (
          <button onClick={onClick} className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
      )}
    </>
  );
};
