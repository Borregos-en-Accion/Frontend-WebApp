import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./FirstDay.module.css";

export default function FirstDayPage() {
  return (
    <>
      <Navbar />

      <div>
        <h1>Día 1</h1>
        <p>Bienvenido al primer día de la competencia:</p>
        <p>¡Prepárate para la emoción!</p>
      </div>
    </>
  );
}
