import React from "react";
import styles from "../styles/Table.module.css";

export default function Table() {


  return (
    <div>
    <table className={`${styles.blueTable}`}>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Equipo 1</th>
          <th>vs</th>
          <th>Equipo 2</th>
          <th>Cancha</th>
          <th>Hora</th>
          <th>Ganador</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>Rojo</td>
          <td>vs</td>
          <td>Negro</td>
          <td>1</td>
          <td>16:00</td>
          <td>...</td>
        </tr>
        <tr>
          <td>A</td>
          <td>Verde Bandera</td>
          <td>vs</td>
          <td>Negro</td>
          <td>2</td>
          <td>16:30</td>
          <td>...</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Azul Aqua</td>
          <td>vs</td>
          <td>Arena</td>
          <td>3</td>
          <td>17:00</td>
          <td>...</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Naranja</td>
          <td>vs</td>
          <td>Arena</td>
          <td>1</td>
          <td>19:30</td>
          <td>...</td>
        </tr>
        <tr>
          <td>B</td>
          <td>Blanco</td>
          <td>vs</td>
          <td>Morado</td>
          <td>1</td>
          <td>20:00</td>
          <td>...</td>
        </tr>
        <tr>
          <td>B</td>
          <td>Blanco</td>
          <td>vs</td>
          <td>Amarillo</td>
          <td>1</td>
          <td>20:30</td>
          <td>...</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Naranja</td>
          <td>vs</td>
          <td>Azul Aqua</td>
          <td>1</td>
          <td>20:30</td>
          <td>...</td>
        </tr>
        <tr>
          <td>A</td>
          <td>Verde Bandera</td>
          <td>vs</td>
          <td>Rojo</td>
          <td>2</td>
          <td>20:30</td>
          <td>...</td>
        </tr>
        <tr>
          <td>B</td>
          <td>Amarillo</td>
          <td>vs</td>
          <td>Morado</td>
          <td>3</td>
          <td>20:30</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>

  </div>
  );
}
