import { OpeningPage } from "../../constants/contents/AuthContent";
import { MainContent } from "../../constants/contents/mainContent";

const AuthLeftSide = () => {
  return (
    <>
      <div
        className="AuthLeftSide"
        style={{ backgroundImage: `url(${OpeningPage.leftSideImg})` }}
      >
        <div className="head">
          <div className="appLogo">
            <img src={MainContent.appLogo} alt="" />
          </div>
        </div>
        <div className="centerTxt">
          <div className="text">
            <h1 className="title">{OpeningPage.title}</h1>
            <h6 className="sub_para">{OpeningPage.subQuotes}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLeftSide;
