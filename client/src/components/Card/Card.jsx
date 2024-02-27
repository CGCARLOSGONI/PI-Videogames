import React from "react";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";

const Card = ({ id, background_image, name, genres }) => {
  return (
    <Link className={style.link} to={`/detail/${id}`}>
      <div className={style.VideogamesContainer}>
        <div>
          <img className={style.image} src={background_image} alt="" />
        </div>
        <h3 className={style.name}>Name: {name}</h3>
        <h3 className={style.Genre}>Genre: {genres}</h3>
      </div>
    </Link>
  );
};

export default Card;
