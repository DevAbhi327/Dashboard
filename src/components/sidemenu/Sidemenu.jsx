import { Accordion } from "react-bootstrap";
import { MainContent } from "../../constants/contents/mainContent";
import "../../styles/sidemenu/Sidemenu.css";
import { useState } from "react";
import { SidemenuContent } from "../../constants/contents/SidemenuContent";
import { RiHomeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import userPng from "../../assets/userPng.png";
import { useDispatch, useSelector } from "react-redux";
import { setSidemenuToggle } from "../../redux/feature/feature-sidemenu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Sidemenu = () => {
  const [activeAccordionKey, setActiveAccordionKey] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sideMenuTgl = useSelector((state) => state.Sidemenu);

  const UserInfo = useSelector((state) => state.UserInfo);
  const dispatch = useDispatch();
  const handleAccordionSelect = (eventKey) => {
    setActiveAccordionKey(eventKey);
  };
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    // Close the side menu if the window width is between 299px and 799px its only for small devices
    if (windowWidth >= 299 && windowWidth <= 799) {
      dispatch(setSidemenuToggle());
    }
  };

  return (
    <>
      <div className={`Sidemenu ${sideMenuTgl.open ? "" : "hide"}`}>
        <div className="head">
          <div className="logo">
            <img src={MainContent.appLogo} alt="app logo" />
          </div>
          {windowWidth >= 300 && windowWidth <= 799 && (
            <button
              onClick={() => dispatch(setSidemenuToggle())}
              className="toggleSidemenu"
            >
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>
        <div className="Sidemenu_contect">
          <div className="link_lists">
            <span className="heading">Main</span>

            <Accordion
              flush
              className="sidebarAccordion"
              activeKey={activeAccordionKey}
              onSelect={handleAccordionSelect}
            >
              {SidemenuContent?.map((e, i) => (
                <Accordion.Item eventKey={i} key={`item-${i}`}>
                  <Accordion.Header key={`header-${i}`}>
                    <div
                      className={`menuList accoHeader ${
                        activeAccordionKey === String(i) ? "active" : ""
                      }`}
                    >
                      <div className="icon">
                        {e.icon ? e.icon : <RiHomeLine />}
                      </div>
                      <span className="text">{e.name}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body key={`body-${i}`}>
                    <ul>
                      {e.option?.map((opt, j) => (
                        <li key={`option-${j}`}>
                          <Link
                            to={opt.link}
                            className={`menuList ${
                              activeLink === opt.link ? "active" : ""
                            }`}
                            onClick={() => handleLinkClick(opt.link)}
                          >
                            <span className="text">{opt.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="userDetail">
            <div className="pic">
              <img src={userPng} alt="" />
            </div>
            <div className="content">
              {/* <h6>{UserInfo?.username}</h6> */}
              <h6>Abhishek</h6>

              {/* <p>{UserInfo?.sub}</p> */}
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
