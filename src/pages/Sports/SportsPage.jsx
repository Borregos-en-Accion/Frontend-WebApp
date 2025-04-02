import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./Sport.module.css";

export default function SportsPage() {
  return (
    <>
      <Navbar />

      <div>
        <h1>Deportes</h1>
        <p>Bienvenido a la página de deportes.</p>
        <p>Aquí encontrarás información sobre los deportes que se practican.</p>
      </div>
    </>
  );
}
