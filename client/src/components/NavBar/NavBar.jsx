import SearchBar from "../SearchBar/SearchVBar";
import style from '../NavBar/NavBar.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClean } from "../../redux/actions";

const NavBar = () => {
  
  
return (
  <div className={style.container}>
    <SearchBar />
    <Link to="/form">
      <button>Form</button>
    </Link>
  </div>
);
}

export default NavBar;