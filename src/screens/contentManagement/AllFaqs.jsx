import { useEffect, useState } from "react";
import AllFaqCard from "../../components/contentManagement/AllFaqCard";
import "../../styles/contentManagement/AllFaqs.css";
import { deleteFaq, getAllFaqCategories, getAllFaqs } from "../../api/faq-api";
import SelectInput from "../../components/ui/SelectInput";
import ScreenLoader from "../../components/ui/ScreenLoader";

const AllFaqs = () => {
  const [allFaqs, setAllFaqs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategories, setCurrentCategories] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    getAllFaqCategories().then((res) => {
      setCategories(res);
      setCurrentCategories(res[0]?.categoryName)
      getAllFaqs({ categoryId: res[0].id }).then((res) => {
        setAllFaqs(res);
      });
    });

  }, []);
  
  const handleSelectCategories = (id) => {
    setLoading(true);

    getAllFaqs({ categoryId: id }).then((res) => {
      setAllFaqs(res);
      setLoading(false);
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
 
  return (
    <>
      {loading && <ScreenLoader />}

      <div className="AllFaqs innerBox sectionContainer">
        <div className="boxHead">
          <h6 className="heading">ALL FAQ</h6>
          {/* <select className="sortBy" name="" id="">
            <option value="today">All</option>
          </select> */}
          <SelectInput options={categories} defaultOption={currentCategories} onChange={(e) => handleSelectCategories(e.target.value)}/>
        </div>
        <div className="allFaqs_cards">
          {allFaqs.length > 0 ? (
            allFaqs.map((e, i) => (
              <AllFaqCard faqs={e} key={i} previewFaq deleteFaqHandler={deleteFaqHandler} />
            ))
          ) : (
            <><span className="noDataSpan">No data in this category</span></>
          )}
        </div>
      </div>
    </>
  );
};

export default AllFaqs;
