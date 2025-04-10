import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Teams.module.css";

const leftColumn = [
  //Equipos en la columna izquierda
  { name: "1er Año de Prepa", color: "#b3f000", colorLabel: "Verde Lima" },
  { name: "2do Año de Prepa", color: "#800040", colorLabel: "Guinda" },
  { name: "3er Año de Prepa", color: "#ff3dad", colorLabel: "Rosa" },
  { name: "Colaboradores", color: "#808080", colorLabel: "Gris" },
  { name: "Ing. en Finanzas", color: "#00caca", colorLabel: "Azul" },
  {
    name: "Lic. en Administración, Estrategia y Transformación de negocios",
    color: "#ffd500",
    colorLabel: "Amarillo",
  },
  { name: "Ing. Industrial", color: "#ff0000", colorLabel: "Rojo" },
];

const rightColumn = [
  //Equipos en la columna derecha
  {
    name: "Lic. en Negocios Internacionales",
    color: "#008f39",
    colorLabel: "Verde Bandera",
  },
  {
    name: "Lic. en Mercadotecnia/Ciencias Sociales",
    color: "#8c52ff",
    colorLabel: "Morado",
  },
  { name: "Lic. en Arquitectura", color: "#ff8c00", colorLabel: "Naranja" },
  {
    name: "LDI / AMC / ESC",
    color: "#f5cfa0",
    textColor: "#000",
    colorLabel: "Arena",
  },
  { name: "Ing. Mecatrónica", color: "#000000", colorLabel: "Negro" },
  {
    name: "Ing. IID / ITC / IIT",
    color: "#ffffff",
    textColor: "#000",
    colorLabel: "Blanco",
  },
  {
    name: "Eligen su equipo",
    color: "#fffacd",
    textColor: "#000",
    colorLabel: "Exploración",
  },
];

export default function TeamsPage() {
  // Crea el estado "leftTeams" usando useState
  const [leftTeams, setLeftTeams] = useState(() => {
    const stored = localStorage.getItem("leftTeams"); // Intenta obtener el item "leftTeams" desde localStorage
    return stored ? JSON.parse(stored) : leftColumn; // Si existe, lo convierte de JSON a objeto; si no, usa el array "leftColumn"
  });

  // Crea el estado "rightTeams" de igual manera
  const [rightTeams, setRightTeams] = useState(() => {
    const stored = localStorage.getItem("rightTeams");
    return stored ? JSON.parse(stored) : rightColumn;
  });

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Equipos</h1>
        <div className={styles.teamsWrapper}>
          <div className={styles.column}>
            {leftTeams.map(
              (
                team,
                i // Itera sobre cada objeto en "leftTeams"
              ) => (
                <div
                  key={i} // Asigna una clave única basada en el índice, necesaria para listas
                  className={styles.teamPill}
                  style={{
                    backgroundColor: team.color,
                    color: team.textColor || "#fff",
                  }}
                >
                  <div className={styles.colorLabel}>{team.colorLabel}</div>
                  <div className={styles.teamName}>{team.name}</div>
                </div>
              )
            )}
          </div>
          <div className={styles.column}>
            {rightTeams.map((team, i) => (
              <div
                key={i}
                className={styles.teamPill}
                style={{
                  backgroundColor: team.color,
                  color: team.textColor || "#fff",
                }}
              >
                <div className={styles.colorLabel}>{team.colorLabel}</div>
                <div className={styles.teamName}>{team.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
