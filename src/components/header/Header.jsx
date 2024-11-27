import { HiOutlineMenuAlt1 } from "react-icons/hi";
import '../../styles/header/Header.css'
import { useDispatch } from "react-redux";
import { setSidemenuToggle } from "../../redux/feature/feature-sidemenu";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="Header">
        {/* <div className="inner-wrapper">
          <div className="search">
          <IoSearchSharp />
          <input type="text" placeholder="Search" />
          </div>
        </div> */}
      <button onClick={() => dispatch(setSidemenuToggle())} className="toggleSidemenu"><HiOutlineMenuAlt1 /></button>
      </div>
    </>
  );
};

export default Header;
