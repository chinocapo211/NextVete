"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Quienes_somos = () => {
  return (
    <div>
      <Navbar/>
      <div className={style["caja2"]}>
      <h1>Nosotros</h1>
        <div className={style["caja"]}>
          <div>
            <h2>Santiago Ferrara: El ojo de la excelencia</h2>
            <p>Santiago Ferrara es un diseñador extraordinario, reconocido por su capacidad para transformar ideas en realidades visualmente impactantes. Con una trayectoria profesional que abarca más de una década, Santiago ha dejado una marca indeleble en el mundo del diseño. Su enfoque innovador y su atención meticulosa a los detalles le han permitido crear obras que no solo cumplen con los requisitos técnicos, sino que también cautivan y sorprenden a las audiencias.</p>
            <p>No solo es un maestro en el uso de herramientas de diseño, sino que también posee una notable habilidad para liderar equipos creativos, inspirando a otros diseñadores a alcanzar su máximo potencial. Su portafolio está repleto de proyectos exitosos que demuestran su versatilidad y talento, consolidándolo como uno de los diseñadores más destacados de su generación.</p>
          </div>
          <div>
            <h2>Felipe Blaustein: Un desarrollador nato</h2>
            <p>Felipe Blaustein es un desarrollador nato, cuya pasión por la programación y la tecnología se manifiesta en cada proyecto que emprende. Desde una edad temprana, Felipe mostró un talento innato para comprender y manipular lenguajes de programación, lo que le permitió destacarse rápidamente en el ámbito del desarrollo de software.</p>
            <p>A lo largo de su carrera, Blaustein ha trabajado en una amplia variedad de proyectos, desde aplicaciones móviles hasta sistemas complejos de backend. Su profundo conocimiento de múltiples lenguajes y frameworks le permite abordar cualquier desafío de desarrollo con confianza y precisión. Su enfoque analítico y su capacidad para resolver problemas de manera eficiente son cualidades que lo han convertido en un recurso invaluable para los equipos con los que ha colaborado.</p>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default Quienes_somos;
