/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

const PageBreadcrumbs = ({ homeLink, pageName, parentPage }) => {
  return (
    <>
      <div className="PageBreadcrumbs">
        <h6 className="parentPage">{parentPage}</h6>
        <div className="links">
            <Link to={homeLink}>Dashboard</Link>
            {pageName ? <><MdChevronRight /> <p>{pageName}</p></> : ""}
        </div>
      </div>
    </>
  );
};

export default PageBreadcrumbs;
