import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Sport.module.css";

import FutbolIcon from "../../assets/futbol.svg";
import BasketballIcon from "../../assets/basketball.svg";
import VoleyballIcon from "../../assets/voleyball.svg";
import TennisIcon from "../../assets/tennis.svg";
import EsportsIcon from "../../assets/e-sports.svg";
import QuemadosIcon from "../../assets/quemados.svg";
import RelevosIcon from "../../assets/atletismo.svg";
import CuerdaIcon from "../../assets/cuerda.svg";

const initialSports = [
  { name: "Futbol", icon: FutbolIcon },
  { name: "Basketball", icon: BasketballIcon },
  { name: "Volleyball", icon: VoleyballIcon },
  { name: "Tennis", icon: TennisIcon },
  { name: "E-Sports", icon: EsportsIcon },
  { name: "Quemados", icon: QuemadosIcon },
  { name: "Relevos de atletismo", icon: RelevosIcon },
  { name: "Jalon de cuerda", icon: CuerdaIcon }
];

export default function SportsPage() {
  const [sports, setSports] = useState(() => {
    const stored = localStorage.getItem("sports");
    return stored ? JSON.parse(stored) : initialSports;

  });

  const handleRemoveSport = (indexToRemove) => {
    setSports((prev) => {
      const newSports = prev.filter((_, index) => index !== indexToRemove);
      localStorage.setItem("sports", JSON.stringify(newSports));
      return newSports;
    });
  };

  const handleReset = () => {
    localStorage.removeItem("sports");
    setSports(initialSports);
  };


  return (
    <>
     <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Deportes</h1>
        <div className={styles.sportsGrid}>
        {sports.map((sport, i) => (
          <div key={i} className={styles.sportCard}>
            <img src={sport.icon} alt={sport.name} />  
            <div className={styles.sportName}>{sport.name}</div>
            <span className={styles.closeButton} onClick={() => handleRemoveSport(i)}>
              x
            </span>
          </div>
        ))}

        </div>
        <button className={styles.resetButton} onClick={handleReset}>Resetear Deportes</button>
      </div>
    </>
  );
}