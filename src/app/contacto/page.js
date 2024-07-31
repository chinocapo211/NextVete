"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Contacto = () => {
  return (
    <body>
      <Navbar/>
      <div className={style["all"]}>
      <h1>Contacto</h1>
      </div>   
    </body>
  );
};

export default Contacto;