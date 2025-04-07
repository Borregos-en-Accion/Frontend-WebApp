import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function Table() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMatch, setEditingMatch] = useState(null);

  const [formData, setFormData] = useState({
    sport: "",
    division: "",
    teamOneName: "",
    teamTwoName: "",
    branch: "",
    place: "",
    startedAt: "",
    whoWon: "",
  });

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = () => {
    fetch(`${API_URL}/matches`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los partidos:", error);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editingMatch ? "PATCH" : "POST";
    const url = editingMatch
      ? `${API_URL}/matches/${editingMatch._id}`
      : `${API_URL}/matches`;

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        fetchMatches();
        setFormData({
          sport: match.sport || "",
          division: match.division || "",
          teamOneName: match.teamOneName || "",
          teamTwoName: match.teamTwoName || "",
          branch: match.branch || "",
          place: match.place || "",
          startedAt: match.startedAt || "",
          whoWon: match.whoWon || "",
        });
        
        setEditingMatch(null);
      })
      .catch((err) => console.error("Error guardando partido:", err));
  };

  const handleEditClick = (match) => {
    setFormData(match);
    setEditingMatch(match);
  };

  if (loading) return <p>Cargando partidos...</p>;

  return (
    <div>
      <h2>{editingMatch ? "Editar Partido" : "Agregar Partido"}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input name="sport" placeholder="Deporte" value={formData.sport} onChange={handleChange} required />
        <input name="division" placeholder="División" value={formData.division} onChange={handleChange} required />
        <input name="teamOneName" placeholder="Equipo 1" value={formData.teamOneName} onChange={handleChange} required />
        <input name="teamTwoName" placeholder="Equipo 2" value={formData.teamTwoName} onChange={handleChange} required />
        <input name="branch" placeholder="Rama" value={formData.branch} onChange={handleChange} required />
        <input name="place" placeholder="Cancha" value={formData.place} onChange={handleChange} required />
        <input type="time" name="startedAt" value={formData.startedAt} onChange={handleChange} required />
        <input name="whoWon" placeholder="Ganador" value={formData.whoWon} onChange={handleChange} />
        <button type="submit" disabled={loading}>
  {editingMatch ? "Actualizar" : "Agregar"}
</button>

      </form>

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <tr key={match._id}>

                <td>{match.division}</td>
                <td>{match.teamOneName}</td>
                <td>vs</td>
                <td>{match.teamTwoName}</td>
                <td>{match.place}</td>
                <td>{match.startedAt}</td>
                <td>{match.whoWon ?? "..."}</td>
                <td>
                  <button onClick={() => handleEditClick(match)}>Editar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No hay partidos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
