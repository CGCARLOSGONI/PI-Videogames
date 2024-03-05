import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchVBar";
import style from "../NavBar/NavBar.module.css";

const NavBar = () => {
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showCreateButton, setShowCreateButton] = useState(true);

  useEffect(() => {
    // Verificar si la ruta actual es "/form"
    if (location.pathname === "/form") {
      setShowSearchBar(false); // Ocultar la barra de búsqueda si está en "/form"
      setShowCreateButton(false); // Ocultar el botón "Create" si está en "/form"
    } else {
      setShowSearchBar(true); // Mostrar la barra de búsqueda para otras rutas
      setShowCreateButton(true); // Mostrar el botón "Create" para otras rutas
    }
  }, [location.pathname]);

  return (
    <div className={style.container}>
      <Link to="/home" className={style.titleLink}>
        <h2 className={style.title}>Videogames</h2>
      </Link>
      {showSearchBar && <SearchBar />} {/* Renderizar la barra de búsqueda solo si showSearchBar es true */}
      {showCreateButton && (
        <Link to="/form" className={style.link}>
          <button className={style.button}>Create</button>
        </Link>
      )}{" "}
      {/* Renderizar el botón "Create" solo si showCreateButton es true */}
    </div>
  );
};

export default NavBar;
