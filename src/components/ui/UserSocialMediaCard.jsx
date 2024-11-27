/* eslint-disable react/prop-types */

const UserSocialMediaCard = ({ socialIcon, socialName, target }) => {
  return (
    <>
      <div className="UserSocialMediaCard">
        <div className="socialIcon"><img src={socialIcon} alt="" /></div>
        <div className="txt">
          <h6>{socialName}</h6>
          <p>{target}</p>
        </div>
      </div>
    </>
  );
};

export default UserSocialMediaCard;
