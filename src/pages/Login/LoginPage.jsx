import React, { useState } from "react";
import styles from "../../styles/Login.module.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      window.location.href = "/equipos";
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`${styles.container}`}>
      <div className={`${styles.login_box}`}>
        <img
          src="src/assets/logo_chico.png"
          alt="Borregos en Accion Logo"
          className={`${styles.logo}`}
        />

        <form className={styles.input_container} onSubmit={handleSubmit}>
          <label htmlFor="username" className={styles.label}>
            Usuario
          </label>
          <input
            type="text"
            id="username"
            placeholder="Usuario"
            className={styles.input_field}
            required
          />

          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className={styles.input_field}
            required
          />

          <button
            type="submit"
            className={styles.login_button}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </main>
  );
}
