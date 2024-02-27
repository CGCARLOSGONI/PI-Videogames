import Navbar from "../../NavBar/NavBar";
import Cards from "../../Cards/Cards";
import style from "../../Views/Home/Home.module.css";
import { useState, useEffect } from "react";
import { getVideogames, getClean } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../SearchBar/SearchVBar";
import NavBar from "../../NavBar/NavBar";
import Filter from "../../Filters/Filter";

const Home = () => {
  const [selectFilters, setSelectFilters] = useState({ orderAlphabetic: "", genreId: "" });

  return (
    <div className={style.found}>
      <NavBar />

      <div className={style.filters}>
        <Filter selectFilters={selectFilters} setSelectFilters={setSelectFilters} />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
