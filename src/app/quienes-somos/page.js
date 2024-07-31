"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Quienes_somos = () => {
  return (
    <div>
      <Navbar/>
      <div className={style["all"]}>
      <h1>Quienes_somos</h1>
      </div>   
    </div>
  );
};

export default Quienes_somos;
