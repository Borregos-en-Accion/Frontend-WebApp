import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <main className={`${styles.container}`}>
        <div className={`${styles.login_box}`}>
          <img
            src="src/assets/logo_chico.png"
            alt="Borregos en Accion Logo"
            className={`${styles.logo}`}
          />

          <Link to="/tournament" className={styles.login_button}>
            Ver Torneo
          </Link>

          <Link to="/login" className={styles.adminTournament_button}>
            Administrar Torneo
          </Link>
        </div>
      </main>
    </>
  );
}
