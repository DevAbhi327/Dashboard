/* eslint-disable react/prop-types */
import { MdOutlineDelete } from "react-icons/md";

const AllFaqsCard = ({title, para, onDelete}) => {
  return (
    <>
      <div className="AllFaqsCard">
        <div className="txt">
            <h5>{title}</h5>
            <p>{para}</p>
        </div>
        <button onClick={onDelete} className='delete'><MdOutlineDelete /></button>
      </div>
    </>
  )
}

export default AllFaqsCard;
