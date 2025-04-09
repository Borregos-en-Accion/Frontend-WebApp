import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

const API_URL = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data) {
        localStorage.setItem("user", data.data.name);
        localStorage.setItem("role", data.data.role);

        navigate("/equipos");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`${styles.container}`}>
      <div className={`${styles.login_box}`}>
        <img
          src={logo}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
