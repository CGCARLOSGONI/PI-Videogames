import { Link } from "react-router-dom";
import style from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <div className={style.landingStyle}>
      <button className={style.button}>
        <Link className={style.text} to="/home">
          START
        </Link>
      </button>
    </div>
  );
};

export default Landing;
