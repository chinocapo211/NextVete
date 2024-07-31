"use client"
import Cita from './Cita.jsx';
import style from "../page.module.css"
import React, { useState } from 'react';
function ListadoCitas({ listaCitas, onDelete }) {
  if (!Array.isArray(listaCitas)) {
    listaCitas = [listaCitas];
  }

  return (
    <div className={style["listado-citas"]}>
      {listaCitas.map((cita, index) => (
        <Cita
          key={index}
          mascota={cita.nombreMascota}
          dueno={cita.nombreDueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.aclaracion}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default ListadoCitas;