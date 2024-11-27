import SelectInputBorder from "../../components/ui/SelectInputBorder";
import TextInput from "../../components/ui/TextInput";
import "../../styles/matrimony/AddNewSubscription.css";
import imagePlaceholder from '../../assets/imagePlaceholder.jpg'
import { ButtonMain } from "../../components/ui/ButtonUI";
const AddNewSubscription = () => {
  return (
    <>
      <div className="AddNewSubscription">
        <div className="inner_container">
          <div className="boxHead">
            <h6 className="sectionHeading">Enter New Subscription Details</h6>
          </div>
          <div className="boxBody">
            <div className="input_container">
              <SelectInputBorder
                labelName="Subscription Name"
                option="Awesome"
              />
              <SelectInputBorder labelName="Select Duration" option="1 Year" />
              <SelectInputBorder
                labelName="Enter Original Price"
                option="10,000/-"
              />
              <SelectInputBorder labelName="Selling Price" option="2,000/-" />
              {/* <SelectInputBorder
                labelName="Select Discount Duration"
                option="1 Year"
              /> */}
              {/* <SelectInputBorder
                labelName="Select Subscription Catagory"
                option="Yearly Plan"
              /> */}
            </div>
          </div>
        </div>
        <div className="inner_container addBox">
          <div className="col6">
            <div className="boxHead">
              <h6 className="sectionHeading">Add Benefits of Subscription</h6>
            </div>
            <div className="boxBody">
              <div className="input_full">
                <div className="listCard">
                  <span>1</span>
                  <TextInput />
                </div>
                <div className="listCard">
                  <span>2</span>
                  <TextInput />
                </div>
                <div className="listCard">
                  <span>3</span>
                  <TextInput />
                </div>
                <div className="btm">
                  <button className="addMoreBtn">+ Add More</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col6">
            <div className="boxHead">
              <h6 className="sectionHeading">Add Benefits of Subscription</h6>
            </div>
            <div className="boxBody">
              <div className="input_full">
                <div className="listCard">
                  <span>1</span>
                  <TextInput />
                </div>
                <div className="listCard">
                  <span>2</span>
                  <TextInput />
                </div>
                <div className="listCard">
                  <span>3</span>
                  <TextInput />
                </div>
                <div className="btm">
                  <button className="addMoreBtn">+ Add More</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="inner_container uploadImg">
          {/* <div className="boxHead">
            <div className="optional">
              <h6 className="sectionHeading">Upload Image</h6>
              <span>(Optional)</span>
            </div>
          </div> */}
          <div className="boxBody">
            {/* <div className="uploadImgBox">
              <div className="img"><img src={imagePlaceholder} alt="" /></div>
              <div className="content">
                <p>Please upload square image, size less than 500KB</p>
                <input type="file" />
              </div>
            </div> */}
            <div className="centerBtns">
              <ButtonMain btnColor='red' name='Cancel' />
              <ButtonMain btnColor='purple' name='Add' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewSubscription;
