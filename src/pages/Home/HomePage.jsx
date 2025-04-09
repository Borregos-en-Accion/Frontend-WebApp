import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

export default function HomePage() {
  return (
    <>
      <main className={`${styles.container}`}>
        <div className={`${styles.login_box}`}>
          <img
            src={logo} 
            alt="Borregos en Accion Logo"
            className={`${styles.logo}`}
          />

          <Link to="/home" className={styles.login_button}>
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
