import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./LandingPage.module.css";
import croquis from '../../assets/CroquisTorneo.jpeg';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className={styles.borregosSection}>

        <h1 className={styles.borregosTitulo}>¡Borregos en Acción!</h1>

        <div className={styles.borregosText}>
          <div className={styles.textBox}>
            <p><em>Bienvenidos a Borregos en Acción</em></p>
            <p>📍 <em>Campus Sonora Norte</em><br />
              🎉 El evento deportivo más esperado del año.</p>

            <p>
              Durante varios días, estudiantes de <em>preparatoria, profesional y colaboradores</em><br />
              se enfrentarán en competencias llenas de energía, pasión y espíritu <em>Borrego</em>.
            </p>

            <p>
              🏆 Más que un torneo, es una <em>celebración del trabajo en equipo, la sana competencia y el orgullo de pertenecer a la comunidad <strong>Tec</strong></em>.
            </p>

            <p>
              🔵 <em>¡Prepárate para vivir la emoción, apoyar a tus equipos favoritos y ser parte de esta gran tradición!</em>
            </p>
          </div>
        </div>

        <div className={styles.borregosMapa}>
          <h3>Mapa del evento</h3>
          <img src={croquis} alt="Mapa del evento" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
