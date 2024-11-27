/* eslint-disable react/prop-types */
import { ButtonMain } from "../ui/ButtonUI";
import MatrimonyBasicProfile from "./MatrimonyBasicProfile";

const VerificationTabBody = ({rightScreen , leftScreen}) => {
  return (
    <>
      <div className="tab_body">
        {/* left side */}
        <div className="left">
          {leftScreen? leftScreen : <MatrimonyBasicProfile/>}
       
        </div>
        
        {/* right side */}
        <div className="right">{rightScreen}
          {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor="red" name="Reject" />
          <ButtonMain btnColor="green" name="Approved" />
          <ButtonMain btnColor="blue" name="Continue" />
        </div>
        </div>
      </div>
      
        

    </>
  );
};

export default VerificationTabBody;
