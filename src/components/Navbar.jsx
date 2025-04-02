import React from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <nav className={styles.navbar}>
      {/* Lado izquierdo */}
      <div className={styles.logo_container}>
        <img
          src="src/assets/borregos_label.png"
          alt="Borregos Label"
          className={styles.logo}
        />
      </div>

      <ul className={styles.nav_links}>
        <li>
          <a
            href="/equipos"
            className={currentPath === "/equipos" ? styles.active_link : ""}
          >
            Equipos
          </a>
        </li>
        <li>
          <a
            href="/primer_dia"
            className={currentPath === "/primer_dia" ? styles.active_link : ""}
          >
            Día 1
          </a>
        </li>
        <li>
          <a
            href="/segundo_dia"
            className={currentPath === "/segundo_dia" ? styles.active_link : ""}
          >
            Día 2
          </a>
        </li>
        <li>
          <a
            href="/deportes"
            className={currentPath === "/deportes" ? styles.active_link : ""}
          >
            Deportes
          </a>
        </li>
      </ul>
    </nav>
  );
}
