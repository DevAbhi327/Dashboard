/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import MatrimonyCustomOfferCard from "../../components/matrimony/MatrimonyCustomOfferCard";
import "../../styles/matrimony/MatrimonyUserCustomPlan.css";
const OverallUserCustomPlan = () => {
  // dummy offerPlan
  const customMonthOfferPlan = {
    monthlyPlan: [
      {
        planName: "SILVER",
        price: "1200",
        type: "month",
        popular:false,
        features: [
          { value: "50 Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: false },
          { value: "Standout Other Profile", status: false },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "GOLD",
        price: "1800",
        type: "month",
        popular:false,
        features: [
          { value: "120 Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: false },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "PREMIUM",
        price: "2200",
        type: "month",
        popular:true,
        features: [
          { value: "Unlimited Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: true },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "DIAMOND",
        price: "3200",
        type: "month",
        popular:false,
        features: [
          { value: "Unlimited Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: true },
          { value: "Personal Agent", status: true },
        ],
      },
    ],
    yearlyPlan: [
      {
        planName: "SILVER",
        price: "10,000",
        type: "year",
        popular:false,
        features: [
          { value: "50 Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: false },
          { value: "Standout Other Profile", status: false },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "GOLD",
        price: "15,000",
        type: "year",
        popular:false,
        features: [
          { value: "120 Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: false },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "PREMIUM",
        price: "20,000",
        type: "year",
        popular:true,
        features: [
          { value: "Unlimited Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: true },
          { value: "Personal Agent", status: false },
        ],
      },
      {
        planName: "DIAMOND",
        price: "30,000",
        type: "year",
        popular:false,
        features: [
          { value: "Unlimited Profiles Viewing", status: true },
          { value: "Unlimited Call", status: true },
          { value: "View Contact Number", status: true },
          { value: "Supported 24/7", status: true },
          { value: "Standout Other Profile", status: true },
          { value: "Personal Agent", status: true },
        ],
      },
    ],
  };
  const [planType, setPlanType] = useState(true);

  return (
    <>
      <div className="MatrimonyUserCustomPlan OverallUserCustomPlan">
        <div className="customPlan_heading">
          <h1 className="title">Set up your plan, Edit a plan anytime</h1>
          <p className="subTitle">
          Choose the plan that's right edit for seasons offer and Discounts. 
          </p>
        </div>
        <div className="centerDateToggle">
          <span className="labelName">Monthly</span>
          <div className="toggleSwitch">
            <span className="ss_switch">
              <input
                id="switch-rounded"
                onClick={() => setPlanType(!planType)}
                type="checkbox"
              />
              <label htmlFor="switch-rounded"></label>
            </span>
          </div>
          <span className="labelName">Yearly</span>
          <span className="customOffervalue">35% OFF</span>
        </div>
        <div className="offerCards">
          {planType &&
            customMonthOfferPlan?.monthlyPlan?.map((e, i) => (
              <MatrimonyCustomOfferCard key={i} data={e} />
            ))}
          {!planType &&
            customMonthOfferPlan?.yearlyPlan?.map((e, i) => (
              <MatrimonyCustomOfferCard key={i} data={e} />
            ))}
        </div>
      </div>
    </>
  );
};

export default OverallUserCustomPlan;
