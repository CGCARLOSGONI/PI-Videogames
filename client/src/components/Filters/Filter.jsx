import style from "./Filter.module.css";
import { filterVideogames, getGenres } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ selectFilters, setSelectFilters }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const handleFilters = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    console.log(property, value);
    dispatch(filterVideogames({ ...selectFilters, [property]: value }));
    setSelectFilters((prevState) => ({ ...prevState, [property]: value }));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <select name="orderAlphabetic" className={style.option} defaultValue="none" onChange={(event) => handleFilters(event)}>
        <option value="none" disabled hidden>
          Order by
        </option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
        <option value="rating- DESC">Rating +</option>
        <option value="rating-ASC">Rating -</option>
      </select>
      <select name="genreId" className={style.option} defaultValue="none" onChange={(event) => handleFilters(event)}>
        <option value="none" disabled hidden>
          Genre
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
