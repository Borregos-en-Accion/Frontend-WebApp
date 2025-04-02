import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./Teams.module.css";

export default function TeamsPage() {
  return (
    <>
      <Navbar />

      <div>
        <h1>Equipos</h1>
        <p>Bienvenido a la página de equipos.</p>
        <p>Aquí encontrarás información sobre los equipos participantes.</p>
      </div>
    </>
  );
}
