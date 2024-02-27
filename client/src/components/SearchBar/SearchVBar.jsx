import style from "../SearchBar/SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClean, getVideogames, searchName } from "../../redux/actions";
import { useParams } from "react-router-dom";

const SearchBar = () => {
  
  const dispatch = useDispatch();
  const searchNameResult = useSelector((state) => state.searchName);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    if (name.trim().length) {
      dispatch(searchName(name));
    }
    setName("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  useEffect(() => {
  return () => {
    dispatch(getClean())
  }
  }, [dispatch])
   


  return (
    <div className={style.containerSearch}>
      <input
        className={style.input}
        value={name}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        placeholder="Search..."
        type="search"
      />
      <button className={style.button} onClick={handleClick}>
        submit
      </button>
    </div>
  );
};

export default SearchBar;

