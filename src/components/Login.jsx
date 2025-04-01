import React from "react";
import "../styles/Login.css"; // Importamos la hoja de estilos

export const Login = () => (
  <div className="container">
    <div className="login-box">
      <img src="src/assets/logo.png" alt="Borregos" className="logo" />

      <div className="input-container">
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />
        <button className="login-button">Ingresar</button>
      </div>
    </div>
  </div>
);
