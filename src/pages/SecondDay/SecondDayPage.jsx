import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./SecondDay.module.css";
import Table from "../../components/Table";

export default function SecondDayPage() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        {/* Título centrado */}
        <h1 className={styles.title}>Borregos en Acción: Segundo Día</h1>

        {/* Subtítulo centrado */}
        <div className={styles.subtitle}>
          <p>Bienvenidos al segundo día de Borregos en Acción.</p>
        </div>

        {/* Contenedor para ajustar la tabla */}
        <div className={styles.tableContainer}>
          <Table day={"2"} />
        </div>
      </div>
    </>
  );
}
