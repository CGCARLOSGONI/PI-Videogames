import style from "../FormCreate/FormCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame } from "../../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../../Validation/Validation";

const FormCreate = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: "",
    genres: [],
  });

  const handleChange = (event) => {
    const { name, value, options } = event.target;

    if (name === "genres" || name === "platforms") {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setInputs({
        ...inputs,
        [name]: selectedValues,
      });
    } else {
      setInputs({ ...inputs, [name]: value });
    }

    setErrors(validation({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validations = validation(inputs);
    if (!validations.existErrors) {
      try {
        await dispatch(createVideogame(inputs));
        alert("Video game created successfully!");
        navigate("/home");
      } catch (error) {
        console.error("Error creating video game:", error);
      }
    } else {
      setErrors(validations.errors);
    }
  };

  const platforms = ["Android", "Apple Macintosh", "Linux", "Nintendo", "PC", "PlayStation", "Xbox"];

  return (
    <div className={style.container1}>
      <h1>Create a Video Game!</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="name">
            Name :
          </label>
          <input className={style.input} type="text" name="name" value={inputs.name} onChange={handleChange} required />
          {errors.name && <p className={style.errormessage}>{errors.name}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="background_image">
            URL :
          </label>
          <input className={style.input} type="text" name="background_image" value={inputs.background_image} onChange={handleChange} required />
          {errors.background_image && <p className={style.errormessage}>{errors.background_image}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="description">
            Description :
          </label>
          <textarea className={style.textarea} name="description" value={inputs.description} onChange={handleChange} required></textarea>
          {errors.description && <p className={style.errormessage}>{errors.description}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="released">
            Release Date :
          </label>
          <input className={style.input} type="date" name="released" value={inputs.released} onChange={handleChange} required />
          {errors.released && <p className={style.errormessage}>{errors.released}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="rating">
            Rating :
          </label>
          <input className={style.input} type="number" name="rating" value={inputs.rating} onChange={handleChange} min="0" max="5" step="0.1" required />
          {errors.rating && <p className={style.errormessage}>{errors.rating}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="genres">
            Genres :
          </label>
          <select className={style.select} multiple name="genres" value={inputs.genres} onChange={handleChange} required>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          {errors.genres && <p className={style.errormessage}>{errors.genres}</p>}
        </div>
        <div className={style.formgroup}>
          <label className={style.label} htmlFor="platforms">
            Platforms :
          </label>
          <select className={style.select} name="platforms" defaultValue="none" onChange={handleChange} id="platforms">
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          {errors.platforms && <p className={style.errormessage}>{errors.platforms}</p>}
        </div>
        <button className={style.button} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default FormCreate;
