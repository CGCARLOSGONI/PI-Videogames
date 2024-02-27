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
    genres: [], // Ahora guardaremos los IDs de los géneros seleccionados
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "genres") {
      const selectedGenreIds = Array.from(event.target.selectedOptions, (option) => option.value);
      setInputs({
        ...inputs,
        [name]: selectedGenreIds,
      });
    } else {
      setInputs({ ...inputs, [name]: value });
    }

    // Validar solo el campo actual
    setErrors(validation({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar todos los campos
    const validations = validation(inputs);
    if (!validations.existErrors) {
      try {
        // Enviamos la solicitud al servidor
        await dispatch(createVideogame(inputs));
        // Si la solicitud es exitosa, mostramos un mensaje de éxito y navegamos a la página de inicio
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
        <div className={style.container2}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
          {errors.name && <p className={style.errorMessage}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="background_image">URL</label>
          <input type="text" name="background_image" value={inputs.background_image} onChange={handleChange} required />
          {errors.background_image && <p className={style.errorMessage}>{errors.background_image}</p>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" value={inputs.description} onChange={handleChange} required></textarea>
          {errors.description && <p className={style.errorMessage}>{errors.description}</p>}
        </div>
        <div>
          <label htmlFor="released">Release Date</label>
          <input type="date" name="released" value={inputs.released} onChange={handleChange} required />
          {errors.released && <p className={style.errorMessage}>{errors.released}</p>}
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input type="number" name="rating" value={inputs.rating} onChange={handleChange} min="0" max="5" step="0.1" required />
          {errors.rating && <p className={style.errorMessage}>{errors.rating}</p>}
        </div>
        <div>
          <label htmlFor="genres">Genres</label>
          <select multiple name="genres" value={inputs.genres} onChange={handleChange} required>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          {errors.genres && <p className={style.errorMessage}>{errors.genres}</p>}
        </div>
        <div>
          <label htmlFor="platforms">Platforms:</label>
          <select name="platforms" defaultValue="none" onChange={handleChange} id="platforms">
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {platforms.map((platform) => {
              return (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              );
            })}
          </select>
          {errors.platforms && <p className={style.errorMessage}>{errors.platforms}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormCreate;
