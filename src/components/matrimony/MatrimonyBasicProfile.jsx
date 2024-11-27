/* eslint-disable react/prop-types */
import userPic from '../../assets/matrimony/rajatPic.jpg'
import pic from '../../assets/matrimony/userPics/pic.jpg'
import pic1 from '../../assets/matrimony/userPics/pic1.jpg'
import pic2 from '../../assets/matrimony/userPics/pic2.jpg'
import pic3 from '../../assets/matrimony/userPics/pic3.png'
import pic4 from '../../assets/matrimony/userPics/pic4.jpg'
import pic5 from '../../assets/matrimony/userPics/pic5.jpg'

const MatrimonyBasicProfile = ({ clsName }) => {
    // dummy userImages
    const userImages = [
        {img:pic},
        {img:pic1},
        {img:pic2},
        {img:pic3},
        {img:pic4},
        {img:pic5},
    ]
  return (
    <>
      <div className={`MatrimonyBasicProfile ${clsName}`}>
        <div className="heading"><h5>Profile</h5></div>
        <div className="userDetails">
            <div className="pic">
                <img src={userPic} alt="" />
            </div>
            <h6 className="name">Rajat Pradhan</h6>
            <p className="cast">Kayasth, Hindu, Saxena</p>
        </div>
        <div className="images">
        <div className="heading"><h5>Image</h5></div>
            <div className="imageBoxs">
                {userImages?.map((e, i)=>{
                    return <div key={i} className="imageBox"><img src={e.img} alt="" /></div>;
                })}
                
            </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyBasicProfile;
