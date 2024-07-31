import React from 'react';
import style from "../page.module.css"
const Navbar = () => {
  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-container"]}>
        <ul className={style["navbar-menu"]}>
          <li className={style["navbar-item"]}>
            <a href="/" className={style["navbar-link"]}>Inicio</a>
          </li>
          <li className={style["navbar-item"]}>
            <a href="../quienes-somos" className={style["navbar-link"]}>Sobre Nosotros</a>
          </li>
          <li className={style["navbar-item"]}>
            <a href="/turno" className={style["navbar-link"]}>Servicios</a>
          </li>
          <li className={style["navbar-item"]}>
            <a href="/contacto" className={style["navbar-link"]}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
