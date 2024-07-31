"use client"

import React, { useState } from 'react';
import style from "../page.module.css"
function Cita({ mascota, dueno, fecha, hora, sintomas, onDelete}) {
  return (
    <div className={style["cita-card"]}>
      <div className={style["cita"]}>
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{dueno}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Síntomas: <span>{sintomas}</span></p>
        <button className={style["boton-eliminar"]} onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default Cita;