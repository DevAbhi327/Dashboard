/* eslint-disable react/prop-types */
import { LuEye, LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import PreviewFaq from "../ui/allPopups/PreviewFaq";
import { useState } from "react";

const AllFaqCard = ({ faqs, key, previewFaq, deleteFaqHandler }) => {
  const [showPreview, setShowPreview] = useState(false);


  return (
    <>
      <div key={key} className="AllFaqCard">
        <div className="head">
          <p>{faqs?.question}</p>
          <div className="btns">
            <button onClick={()=>{setShowPreview(true)}} className="eye">
              <LuEye />
            </button>
            {/* <button className="edit"><LuPencil /></button> */}
            <button onClick={()=>deleteFaqHandler(faqs?.id)} className="delete">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        <p>{faqs?.answer}</p>
      </div>
      {previewFaq && (
        <PreviewFaq
          show={showPreview}
          onHide={() => setShowPreview(false)}
          faq={faqs}
          // steps={steps}
        />
      )}
    </>
  );
};

export default AllFaqCard;
