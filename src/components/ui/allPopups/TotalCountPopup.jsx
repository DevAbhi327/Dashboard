/* eslint-disable react/prop-types */
import { Modal, ProgressBar } from "react-bootstrap";
import cameraPlaceholder from "../../../assets/cameraPlaceholder.jpg";
import { useState } from "react";
import "../../../styles/events/AddEvents.css";
import { RiCloseFill } from "react-icons/ri";
import SelectInput from "../SelectInput";
import MultiStackedAreaChart from "../graph/MultiStackedAreaChart";

const TotalCountPopup = (props) => {
  const filterValues = ["Last 6 months", "Last 3 months", "Last 1 months"];

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="TotalCountPopup"
      >
        <Modal.Body>
          <div className="TotalCountPopup">
            <div className="popupHead">
              <button onClick={props.onHide}>
                <RiCloseFill />
              </button>
            </div>
            <div className="inner-wrapper">
              <div className="graph-head">
                <div className="name-count">
                  <p className="subTitle">Total</p>
                  <h6 className="count">Users</h6>
                </div>
                <div className="labelLists">
                  <div className="labelCard">
                    <div className="circle"></div> Regular User
                  </div>
                  <div className="labelCard">
                    <div className="circle"></div> Subscriotion User
                  </div>
                  <div className="labelCard">
                    <div className="circle"></div> Profile Manager by Manager
                  </div>
                  <div className="labelCard">
                    <div className="circle"></div> Handle by agents
                  </div>
                </div>
                <SelectInput options={filterValues} />
              </div>

              {/* graph */}
              <div className="countGraph">
                <MultiStackedAreaChart />
              </div>

              <div className="bottom-wrapper">
                <p className="subHeading">Count</p>
                <div className="total">
                  <h5 className="totalCount">13,7K</h5>
                  <span className="valueBg green">+3.4%</span>
                </div>
                {/* .line */}
                <ProgressBar className="custom-striped">
                  <ProgressBar   striped variant="success" now={35} key={1} />
                  <ProgressBar variant="warning" now={20} key={2} />
                  <ProgressBar striped variant="danger" now={10} key={3} />
                </ProgressBar>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* total count popup call */}
      {/* const [showPreview, setShowPreview] = useState(false);

       <TotalCountPopup
            show={showPreview}
            onHide={() => setShowPreview(false)}
          /> */}
    </>
  );
};

export default TotalCountPopup;
