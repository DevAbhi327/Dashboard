/* eslint-disable react/prop-types */
import { ButtonMain } from "../ui/ButtonUI";
import { HiCheck } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const MatrimonyCustomOfferCard = ({ data }) => {
 
  return (
    <>
      <div className="MatrimonyCustomOfferCard">
        {data?.popular ? (
          <div className="popularTag fill">Popular Plan</div>
        ) : (
          <div className="popularTag"> &nbsp;</div>
        )}

        <div className="center">
          <div className="planValues">
            <h6 className="planName">{data.planName}</h6>
            <h6 className="price">₹{data.price}</h6>
            <p className="duration">Per {data.type}</p>
          </div>
          <span className="originprice">
            <b>₹10,000</b> Original Price
          </span>
          <ButtonMain name="Edit Plan" />
        </div>
        <span className="featureHeading">All features options</span>
        <div className="featureList">
          {data?.features?.map((e, i) => {
            return (
              <div key={i} className="list">
                {e.status ? (
                  <div className="circle active">
                    <HiCheck />
                  </div>
                ) : (
                  <div className="circle">
                    <RiCloseFill />
                  </div>
                )}
                {e.value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MatrimonyCustomOfferCard;
