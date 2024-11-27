import TextareaInput from "../../components/ui/TextareaInput";
import TextInput from "../../components/ui/TextInput";
import { MdLocalPhone } from "react-icons/md";
import '../../styles/matrimony/ProfileSetting.css'
import userPic from '../../assets/userPic.jpg'
import { RiUpload2Line, RiDeleteBin6Line } from "react-icons/ri";
import RectangleToggleSwitch from "../../components/ui/RectangleToggleSwitch";
import { ButtonMain } from "../../components/ui/ButtonUI";


const ProfileSetting = () => {
  return (
    <>
      <div className="ProfileSetting">
        <div className="inner_container">
          <div className="boxHead">
            <h6 className="sectionHeading">PROFILE SETTINGS</h6>
          </div>
          <div className="boxBody">

            <div className="picture_container">
                <h5 className="innerHeading">ACCOUNT :</h5>
                <div className="picture">
                    <div className="pic"><img src={userPic} alt="" /></div>
                    <div className="content">
                        <h5 className="inputLabel">Profile Picture</h5>
                        <div className="changePicBtns">
                            <button className="change"> <RiUpload2Line /> Change Image</button>
                            <button className="remove"> <RiDeleteBin6Line /> Remove</button>
                        </div>
                        <p className="note">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</p>
                    </div>
                </div>
            </div>

            <div className="input_container">
              <TextInput placeholder='Enter Name' labelName='User Name :' />
              <TextInput placeholder='Enter Email' labelName='Email :' />
              <TextInput placeholder='Enter Phone No' labelName='Phone No :' />
              <TextInput clsName='w50' placeholder='Enter Age' labelName='Age :' />
              <TextInput clsName='w50' placeholder='Enter Designation' labelName='Designation :' />
              <TextareaInput placeholder='Enter Address' labelName='Address :' />
              <div className="status">
                <label className="inputLabel" htmlFor="">Verification Status :</label>
                <span className="cardValue"><MdLocalPhone /> Phone</span>
              </div>
            </div>
            <div className="picture_container setting">
                <h5 className="innerHeading">Setting :</h5>
                <div className="head">
                    <div className="left">
                    <h5 className="inputLabel">Sent Request to change password</h5>
                    <p className="para">You can sent request to change password to super admin</p>
                    </div>
                    <button className="send">Send Request</button>
                </div>
            </div>
            <div className="picture_container setting roles">
                <h5 className="innerHeading">Role & Responsibility :</h5>
                <div className="head">
                    <div className="left">
                    <h5 className="inputLabel">Demo</h5>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <RectangleToggleSwitch id='1' />
                </div>
                <div className="head">
                    <div className="left">
                    <h5 className="inputLabel">Demo</h5>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <RectangleToggleSwitch id='2' />
                </div>
                <div className="head">
                    <div className="left">
                    <h5 className="inputLabel">Demo</h5>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <RectangleToggleSwitch id='3' />
                </div>
            </div>
            <div className="centerBtns">
              <ButtonMain btnColor='red' name='Deactivate Account' />
              <ButtonMain btnColor='default' name='Restore Defaults' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
