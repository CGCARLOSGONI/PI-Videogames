import Cards from "../../Cards/Cards";
import style from "../../Views/Home/Home.module.css";
import { useState } from "react";
import Filter from "../../Filters/Filter";

const Home = () => {

  return (
    <div className={style.found}>
      {/* <NavBar /> */}
      <div className={style.filters}>
        <Filter />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
