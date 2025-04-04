import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./SecondDay.module.css";
import { SingleElimination } from "../../components/SingleElimination";

export default function SecondDayPage() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        {/* Título centrado */}
        <h1 className={styles.title}>Día 2: Fútbol</h1>

        {/* Subtítulo centrado */}
        <div className={styles.subtitle}>
          <h2 className={styles.category}>Categoría: Profesional Rama: Varonil</h2>
          <p>Bienvenidos al segundo día de Borregos en Acción.</p>
          <p className={styles.text}>
            Selecciona entre los diferentes filtros para poder ver entre Deportes, Categoría, Rama, etc.
          </p>
        </div>

        {/* Contenedor para ajustar la tabla */}
        <div className={styles.tableContainer}>
          <SingleElimination />
        </div>
      </div>
    </>
  );
}
