"use client"
import Link from 'next/link';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import style from "./page.module.css"
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className={style["all"]}>
        <h1>Bienvenido a la veterinaria Blaustein-Ferrara.</h1>
        <h3>En este ambiente virtual usted podra ver de que somos capaces nosotros, podiendo contactarnos y conocernos.</h3>
        <h3>Para acceder a nuestras funcionalidades estala barra de navegacion. Si quiere reservar un turno toque Servicios, si quiere conocernos toque Sobre Nosotros y si quiere contactarnos personalmente toque Contacto</h3>
      </div>
    </div>
  );
};

export default HomePage;
