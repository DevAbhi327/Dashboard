/* eslint-disable react/prop-types */
import instaPng from '../../assets/socialIcon/instaPng.png'
import linkedlnPng from '../../assets/socialIcon/linkedlnPng.png'
import whatsappPng from '../../assets/socialIcon/whatsappPng.png'
import facebookPNG from '../../assets/socialIcon/facebookPNG.png'
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";


const UserConnectionCard = ({ pic, name, cast }) => {
  return (
    <>
      <div className="UserConnectionCard">
        <div className="pic">
          <img src={pic} alt="" />
        </div>
        <div className="detail">
          <h6 className="name">{name}</h6>
          <p className="cast">{cast}</p>
        </div>
        <div className="socialLinks">
          <Link>
            <div className="socialCard">
             <img src={facebookPNG} alt="" />
            </div>
          </Link>
          <Link>
            <div className="socialCard">
             <img src={instaPng} alt="" />
            </div>
          </Link>
          <Link>
            <div className="socialCard">
             <img src={whatsappPng} alt="" />
            </div>
          </Link>
          <Link>
            <div className="socialCard">
             <img src={linkedlnPng} alt="" />
            </div>
          </Link>
        </div>
        <p className="para">Minim dolor in amet nulla laboris enim dolore consequat proident Minim dolor in amet nulla laboris enim dolore consequat proident</p>
        <div className="btm">
            <button className='view'>VIEW PROFILE</button>
            <button className='menuMore'><HiDotsVertical /></button>
        </div>
      </div>
    </>
  );
};

export default UserConnectionCard;
