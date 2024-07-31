"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import style from "../page.module.css"
const Contacto = () => {
  return (
    <div>
      <Navbar/>
      <div className={style["all"]}>
      <h1>Contacto</h1>
      <form className={style["contact-form"]}>
        <div class={style["form-group"]}>
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={style["button"]}>Enviar</button>
      </form>
      </div>   
    </div>
  );
};

export default Contacto;