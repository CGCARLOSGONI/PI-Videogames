import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";

const NUM_ITEMS = 15;
const Cards = () => {
  const dispatch = useDispatch();

  const videogames = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(0);
  const [videogamesData, setVideogamesData] = useState();

  useEffect(() => {
    if (videogames.length > 0) {
      setVideogamesData([...videogames.slice(0, NUM_ITEMS)]);
      setCurrentPage(0);
    } else {
      dispatch(getVideogames());
    }
  }, [dispatch, videogames]);
  const nextHandler = () => {
    const allVideogames = videogames.length;
    const nextPage = currentPage + 1; //3
    const firstIndex = currentPage === 0 ? videogamesData.length : nextPage * NUM_ITEMS;
    if (firstIndex + 1 > allVideogames) return;
    setVideogamesData([...videogames.slice(firstIndex, firstIndex + NUM_ITEMS)]);
    setCurrentPage(nextPage);
  };
  const previousHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage === 0 ? prevPage : prevPage * NUM_ITEMS;
    setVideogamesData([...videogames.slice(firstIndex, firstIndex + NUM_ITEMS)]);
    setCurrentPage(prevPage);
  };

  return (
    <div className={style.CardsList}>
      {videogamesData?.map((video) => (
        <Card key={video.id} id={video.id} name={video.name} genres={video.genres} background_image={video.background_image} />
      ))}
      <h1 className={style.titlePage}>{currentPage}</h1>
      <button className={style.buttonPrevious} onClick={previousHandler}>
        ◀
      </button>
      <button className={style.buttonNext} onClick={nextHandler}>
        ▶
      </button>
    </div>
  );
};

export default Cards;
