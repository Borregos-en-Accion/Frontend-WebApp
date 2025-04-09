import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import styles from "./FirstDay.module.css";

export default function FirstDayPage() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Título centrado */}
        <h1 className={styles.title}>Borregos en Acción: Primer Dia</h1>

        {/* Subtítulo centrado */}
        <div className={styles.subtitle}>
          <p>Bienvenidos al primer día de Borregos en Acción.</p>
        </div>

        {/* Contenedor para ajustar la tabla */}
        <div className={styles.tableContainer}>
          <Table day={"1"} />
        </div>
      </div>
    </>
  );
}
