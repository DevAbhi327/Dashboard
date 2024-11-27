import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ButtonMain } from "../ButtonUI";

const PreviewFaq = (props) => {
  const [answer, setAnswer] = useState("");
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const faqAnswer = props?.faq?.answer?.split("\n Steps:");
    setAnswer(faqAnswer[0]?.trim() || "");
    const stepsArray = faqAnswer[1]?.split(";").map(step => step.trim()).filter(Boolean) || [];
    setSteps(stepsArray);
  }, [props.faq]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      className="PreviewFaq"
    >
      <Modal.Body>
        <div className="inner">
          <h6 className="heading">
            {props.faq.question || "Title"}
          </h6>
          <p className="para">
            {answer || "Description"}
            <br />
            <br />
            {steps.length > 0 && <p className="stepsHeading"><b>Steps:</b></p>}
            {steps.map((step, index) => (
              <div className="mt-2" key={index}>
                <span>{index + 1}. </span>
                <span className="para">{step}</span>
              </div>
            ))}
          </p>
          <div className="centerBtns">
            <ButtonMain name="Done" onClick={props.onHide} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PreviewFaq;
