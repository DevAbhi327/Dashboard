import React from "react";
import { Modal } from "react-bootstrap";
// import SuccesPng from "../../../assests/dashboard/successPng.png";
import SpinnerLoader from "../SpinnerLoader";

const ApprovePopup = (props) => {
  const handleApprove = () => {
    props.onApprove();
    props.onHide();
  };
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="sm"
        className="approve alertModal"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="msg">
              {
                props.message ? props.message : (
                  "Are you sure you want to approve this product?"
                )
              }
            </h6>
            <h6 className="msgDetail">
            {
                props.messageDetail ? props.messageDetail : (
                  "By approving this product, you are able to see data in Product Management."
                )
            }
            </h6>
            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel" disabled={props.loading}>
                  Cancel
                </button>
                <button className="popupBtn continue" onClick={handleApprove}>
                  {props.loading ? <SpinnerLoader /> : "Yes"}
                </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ApprovePopup;
