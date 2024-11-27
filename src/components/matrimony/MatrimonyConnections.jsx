/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";

const MatrimonyConnections = ({data}) => {
  return (
    <>
      <div className="MatrimonyConnections">
        <div className="innerBox">
          <div className="boxHead">
            <h6 className="heading">Connections</h6>
            <Link to={AuthenticatedRoutes.MATRIMONY_USER_CONNECTION_LIST}>
            <button className="viewall">View All</button>
            </Link>
          </div>
          <div className="boxBody">
            <div className="connection_cards">
              {data?.map((e, i) => {
                return (
                  <div key={i} className="connection_card">
                    <div className="userpic">
                      <img src={e.userPic} alt="" />
                    </div>
                    <div className="content">
                      <h6 className="name">{e.name}</h6>
                      <button className="plusToggle">
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyConnections;
