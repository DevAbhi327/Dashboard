import { MainContent } from "../../constants/contents/mainContent";

const AppLogoName = () => {
  return (
    <>
      <div className="AppLogoName">
          <div className="logo">
            <img src={MainContent.appLogo} alt="" />
          </div>
          <h6 className="name">{MainContent.appName}</h6>
      </div>
    </>
  );
};

export default AppLogoName;
