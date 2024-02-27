import { Link } from "react-router-dom";
import style from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getById, getClean } from "../../../redux/actions";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const idVideo = useSelector((state) => state.getById);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    dispatch(getById(id))
    .then(() => setloading(false))
    .catch(() => setloading(false))
    return () => dispatch(getClean());
  }, [dispatch, id])

  return (
    idVideo && (
      <div>
        
        {loading ? (
          <div className={style.loading} >LOADING...</div>
        ) : (
          <div className={style.container}>
            <div>
              <img className={style.image} src={idVideo.background_image} />
            </div>
            <div className={style.info}>
              <h2>ID: {idVideo.id} </h2>
              <h2>NAME: {idVideo.name} </h2>
              <h2>PLATFORM: {idVideo.platforms}</h2>
              <h2>RELEASED: {idVideo.released}</h2>
              <h2>RATING: {idVideo.rating}</h2>
              <h2>GENRES: {idVideo.genres}</h2>
              <h2>DESCRIPTION: {idVideo.description}</h2>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Detail;
