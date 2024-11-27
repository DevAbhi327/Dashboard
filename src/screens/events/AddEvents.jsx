import cameraPlaceholder from "../../assets/cameraPlaceholder.jpg";
import { useState } from "react";
import "../../styles/events/AddEvents.css";
import SelectInput from "../../components/ui/SelectInput";
import { planNameEnum } from "../../utils/all-enum";
import { useEffect } from "react";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import ScreenLoader from "../../components/ui/ScreenLoader";
import { createEventApi } from "../../api/event-api";
const AddEvents = () => {
  const [userData, setUserData] = useState({
    photoUrl: "",
    eventName: "",
    time: "",
    date: "",
    meetUrl: "",
    premiumPlanId: "",
  });

  const [planEnumStr, setPlanEnumStr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const value = Object.values(planNameEnum).map((e) => {
      return e.replace("_", " ");
    });
    setPlanEnumStr(value);
  }, [planNameEnum]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({
          ...userData,
          photoUrl: e.target.result.split("base64,")[1],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addEventHandler = async () => {
    setLoading(true);
    try {
      await createEventApi(userData);
      SwalSuccess.fire({
        title: "Event Added Successfully!",
      });
      setUserData({
        photoUrl: "",
        eventName: "",
        time: "",
        date: "",
        meetUrl: "",
        premiumPlanId: "",
      });
    } catch (error) {
      console.error(error);
      SwalError.fire({
        title: error?.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = () => {
    if (
      !userData?.date ||
      !userData?.eventName ||
      !userData?.meetUrl ||
      !userData?.photoUrl ||
      !userData?.premiumPlanId ||
      !userData?.time
    ) {
      SwalError.fire({
        title: "Please fill all fields!",
      });
      return;
    }
    addEventHandler();
  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="AddEvents innerBox">
        <div className="addEvents_inner">
          <div className="imgUpload">
            <div
              className="userPic"
              onClick={() =>
                document.getElementById("profileImageChange").click()
              }
            >
              <div className="circle">
                <img
                  className="profile-pic"
                  src={userData.photoUrl || cameraPlaceholder}
                  alt="profile"
                />
              </div>
              <input
                id="profileImageChange"
                name="profileImageChange"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <label htmlFor="profileImageChange" className="imgUpload_label">
              Upload Cover Photo
            </label>
          </div>
          <div className="input_container">
            <div className="inputBox">
              <label htmlFor="">Event Name</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    eventName: e.target.value,
                  }))
                }
                type="text"
                value={userData.eventName}
                placeholder="Enter event name"
                />
            </div>
            <div className="inputBox">
              <label htmlFor="">Event Time</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                value={userData.time}
                type="time"
                />
            </div>
            <div className="inputBox">
              <label htmlFor="">Event Date</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
                type="date"
                value={userData.date}
                placeholder="Enter event name"
                />
            </div>
            <div className="inputBox">
              <label htmlFor="">Meeting Link</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    meetUrl: e.target.value,
                  }))
                }
                type="text"
                value={userData.meetUrl}
                placeholder="Enter meeting link"
                />
            </div>

            <SelectInput
              labelName="Plan Type"
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  premiumPlanId: e.target.index + 1,
                }))
              }
              options={planEnumStr}
              defaultOption={userData.premiumPlanId}
              />

            <div className="centerBtns">
              <button onClick={submitHandler} className="submitBtn">
                Add Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvents;
