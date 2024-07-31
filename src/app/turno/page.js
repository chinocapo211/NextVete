"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar.jsx';
import Form from '../components/Form.jsx';
import ListadoCitas from '../components/ListadoCitas.jsx';
import React, { useState } from 'react';
import style from "../page.module.css"
const Turno = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };
  return (
    <div className={style["all"]}>
      <Navbar/>
      <h1>Citas veterinaria</h1>
      <div className='App'>
      <Form onAddCita={agregarCita}/>
      <ListadoCitas listaCitas={citas} onDelete={eliminarCita}/>
      </div>
    </div>
  );
};

export default Turno;