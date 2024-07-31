"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Quienes_somos = () => {
  return (
    <div className={style["all"]}>
        <Navbar/>
      <h1>Quienes_somos</h1>
    </div>
  );
};

export default Quienes_somos;
