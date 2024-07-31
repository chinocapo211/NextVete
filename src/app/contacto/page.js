"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Contacto = () => {
  return (
    <div className={style["all"]}>
      <Navbar/>
      <h1>Contacto</h1>
    </div>
  );
};

export default Contacto;