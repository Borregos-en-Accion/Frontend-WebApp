import React from "react";
import styles from "../styles/Navbar.module.css";
import borregos_label from "../assets/borregos_label.png";

export default function Navbar() {
  const currentPath = window.location.pathname;
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className={styles.navbar}>
      {/* Lado izquierdo */}
      <div className={styles.logo_container}>
        <img
          src={borregos_label}
          alt="Borregos Label"
          className={styles.logo}
        />
      </div>

      <ul className={styles.nav_links}>
        <li>
          <a
            href="/home"
            className={currentPath === "/home" ? styles.active_link : ""}
          >
            Home
          </a>
        </li>
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
        {role === "Administrador" && (
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
