import { useState, useEffect } from "react";
import style from "./Filter.module.css";
import { filterVideogames, getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectFilters, setSelectFilters] = useState({ orderAlphabetic: "", genreName: "" });
  console.log("selectFilters", selectFilters);
  console.log(selectedSource, selectedSource);

  const handleFilters = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    console.log("property", property);
    console.log("value", value);
    // if (property === "genreName") {
    //   const selectedGenre = genres.find((genre) => genre.name === value);
    //   console.log("Selected genre:", selectedGenre);
    // }

    if (property === "source") {
      setSelectedSource(value);
    }

    console.log("Dispatching filterVideogames with:", { ...selectFilters, [property]: value });
    const newFilters = { ...selectFilters, [property]: value };
    dispatch(filterVideogames(newFilters));
    setSelectFilters(newFilters);
  };
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const clearFilters = () => {
    setSelectFilters({ orderAlphabetic: "", genreName: "" });
    setSelectedSource("");
    dispatch(filterVideogames({ orderAlphabetic: "", genreName: "", source: "" }));
  };

  return (
    <div className={style.container}>
      <select name="orderAlphabetic" className={style.option} defaultValue="" value={selectFilters.orderAlphabetic} onChange={(event) => handleFilters(event)}>
        <option value="" disabled hidden>
          Order by
        </option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
        <option value="rating-DESC">Rating +</option>
        <option value="rating-ASC">Rating -</option>
      </select>
      <select name="source" className={style.option} defaultValue="" value={selectedSource} onChange={(event) => handleFilters(event)}>
        <option value="" disabled hidden>
          Source
        </option>
        <option value="source-DB">DB</option>
        <option value="source-API">API</option>
      </select>
      <select name="genreName" className={style.option} defaultValue="" value={selectFilters.genreName} onChange={(event) => handleFilters(event)}>
        <option value="" disabled hidden>
          Genre
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <button className={style.option}  onClick={clearFilters}>
        Clear Filter
      </button>
    </div>
  );
};

export default Filter;
