import React, { useState, useEffect, useMemo } from "react";
import DashboardInnerTitle from "../../components/ui/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import SelectInput from "../../components/ui/SelectInput";
import AllFaqsCard from "../../components/contentManagement/AllFaqsCard";
import "../../styles/contentManagement/AddAndManageFaqs.css";
import PreviewFaq from "../../components/ui/allPopups/PreviewFaq";
// import { getAllFaqCategories, addFaq, createFaqCategory, getAllFaqs, deleteFaq } from "../../api/faq-api";
import { MdDeleteOutline } from "react-icons/md";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
// import ApprovePopup from "../../components/ui/popups/ApprovePopup";
import { ButtonMain } from "../../components/ui/ButtonUI";
import {
  addFaq,
  createFaqCategory,
  deleteFaq,
  getAllFaqCategories,
  getAllFaqs,
} from "../../api/faq-api";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import ApprovePopup from "../../components/ui/allPopups/ApprovePopup";
import ScreenLoader from "../../components/ui/ScreenLoader";

const AddAndManageFaqs = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [faqCategory, setFaqCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const [steps, setSteps] = useState([""]);
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    categoryId: "",
  });
  const [allFaqs, setAllFaqs] = useState([]);
  const [popup, setPopup] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const addFaqHandler = async () => {
    setLoading(true);

    try {
      const payload = {
        question: faq.question,
        answer: `${faq.answer} \n Steps: ${steps.join(";")}`,
        faqCategoryId: faq.categoryId,
      };
      await addFaq(payload);
      SwalSuccess.fire({
        title: "FAQ Add Successfully!",
      });
      handlerFormReset();
    } catch (error) {
      console.log(error);
      SwalError.fire({
        title: error?.response?.data?.message || "An error occurred.",
      });
    }finally {
      setLoading(false);
    }
  };

  const openPopup = () => {
    if (!faq.question || !faq.answer || !faq.categoryId) {
      SwalError.fire({
        title: "Please Add All FAQ Fields.",
      });
      return;
    }
    setPopup(true);
  };

  const addCategoryHandler = async () => {
    if (!faqCategory){
      SwalError.fire({
        title: "Please Enter Category First.",
      });
      return
    } ;
    if (loading) return;
    setLoading(true);
    try {
      const id = await createFaqCategory(faqCategory);
      setCategories([...categories, { categoryName: faqCategory, id }]);
      SwalSuccess.fire({
        title: "Category Added!",
      });
      setFaqCategory('')
    } catch (error) {
      console.log(error);
      SwalError.fire({
        title: error?.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateRandomKey = useMemo(() => {
    return Math.random();
  }, []);

  const addStepHandler = (index, e) => {
    const newSteps = [...steps];
    newSteps[index] = e.target.value;
    setSteps(newSteps);
  };

  const deleteStepHandler = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleTabChange = (id) => {
    setCurrentTab(id);
    getAllFaqs({ categoryId: id }).then((res) => {
      setAllFaqs(res);
    });
  };

  const deleteFaqHandler = async (id) => {
    setLoading(true);

    try {
      await deleteFaq(id);
      const newFaqs = allFaqs.filter((e) => e.id !== id);
      setAllFaqs(newFaqs);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFaqCategories().then((res) => {
      setCategories(res);
      setCurrentTab(res[0].id);
      getAllFaqs({ categoryId: res[0].id }).then((res) => {
        setAllFaqs(res);
      });
    });
  }, []);

  useEffect(() => {
    // console.log(faq);
  }, [currentTab]);

  const handlerFormReset = () => {
    setLoading(true);

    setSteps([]);
    setFaq({ answer: "", categoryId: "", question: "" });
    setLoading(false);

  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="AddAndManageFaqs sectionContainer">
        <DashboardInnerTitle name="Add New FAQ Category" />
        <div className="writeAndAdd">
          <div className="writeAndAdd_left category">
            <TextInput
              placeholder="Write your category here"
              value={faqCategory}
              onChange={(e) => setFaqCategory(e.target.value)}
            />
            <ButtonMain
              btnColor="blue"
              name="Add Category"
              onClick={addCategoryHandler}
            />
          </div>
        </div>

        <DashboardInnerTitle name="Add New FAQ" />

        <div className="writeAndAdd">
          <div className="writeAndAdd_left">
            <TextInput
              labelName="Write FAQ Question"
              placeholder="Write your question here"
              value={faq.question}
              onChange={(e) => setFaq({ ...faq, question: e.target.value })}
            />
            <div className="fullText">
              <label htmlFor="" className="inputLabel">
                Write FAQ Answer
              </label>
              <div className="withBtn">
                <TextareaInput
                  placeholder="Write your answer here"
                  value={faq.answer}
                  onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="writeAndAdd_right">
            <div className="col_2">
              <SelectInput
                labelName="FAQ Category"
                options={categories}
                customKey={"categoryName"}
                onChange={(e) => setFaq({ ...faq, categoryId: e.target.value })}
              />
            </div>
            <div className="steps">
              <label htmlFor="" className="inputLabel">
                Write Steps
              </label>
              <div className="lists">
                {steps.map((element, i) => {
                  return (
                    <div key={i} className="list">
                      <span>{i + 1}.</span>
                      <TextInput
                        key={generateRandomKey}
                        placeholder="Write your step here"
                        onChange={(e) => addStepHandler(i, e)}
                        value={element}
                      />
                      <button
                        className="delete"
                        onClick={() => deleteStepHandler(i)}
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  );
                })}
                <button onClick={() => setSteps([...steps, ""])}>
                  + Add More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor="red" onClick={handlerFormReset} name="Reset" />
          <ButtonMain
            btnColor="blue"
            onClick={() => setShowPreview(true)}
            name="Preview FAQ"
          />
          <ButtonMain btnColor="purple" name={"Save"} onClick={openPopup} />
        </div>

        {/* preview popup */}

        <PreviewFaq
          show={showPreview}
          onHide={() => setShowPreview(false)}
          faq={faq}
          steps={steps}
        />
       

        <ApprovePopup
          show={popup}
          onHide={() => setPopup(false)}
          message="Confirmation Add FAQ"
          messageDetail="Are you sure you want to add this FAQ?"
          onApprove={() => addFaqHandler()}
        />
      </div>
    </>
  );
};

export default AddAndManageFaqs;
