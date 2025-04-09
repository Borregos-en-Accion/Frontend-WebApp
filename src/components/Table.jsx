import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
const API_URL = import.meta.env.VITE_API_URL;

const DIVISIONS = [
  "Prepa",
  "Grupo A",
  "Grupo B",
  "Grupo C",
  "Semis Prepa",
  "Final Prepa",
  "Eliminatoria Pro",
  "Cuartos Pro",
  "Semis Pro",
  "Final Pro",
];

const BRANCHES = ["Femenil", "Varonil", "Mixto"];

const PLACES = [
  "Futbol 1",
  "Futbol 2",
  "Futbol 3",
  "Domo 1",
  "Domo 2",
  "Domo 3",
  "Domo 4",
  "Arena 1",
  "Arena 2",
  "E-Sports",
  "Tenis 1",
  "Tenis 2",
  "Relevos",
];

export default function Table(props) {
  const { day } = props;
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingMatch, setEditingMatch] = useState(null);
  const [sports, setSports] = useState([]);
  const [teams, setTeams] = useState([]);

  const role = localStorage.getItem("role");

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
    fetchSports();
    fetchTeams();
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/matches`);
      if (!response.ok) throw new Error("Error al obtener los partidos");
      const data = await response.json();
      setMatches(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSports = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/sports`);
      if (!response.ok) throw new Error("Error al obtener los deportes");
      const data = await response.json();
      const sportsNames = data.data.map((sport) => sport.name);
      setSports(sportsNames);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/teams`);
      if (!response.ok) throw new Error("Error al obtener los equipos");
      const data = await response.json();
      const teamsNames = data.data.map((team) => team.name);
      setTeams(teamsNames);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const method = editingMatch ? "PATCH" : "POST";

    const url = editingMatch
      ? `${API_URL}/matches/${editingMatch._id}`
      : `${API_URL}/matches`;

    formData.day = day;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Error al guardar el partido");
      await fetchMatches();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (match) => {
    setFormData(match);
    setEditingMatch(match);
  };

  const resetForm = () => {
    setFormData({
      sport: "",
      division: "",
      teamOneName: "",
      teamTwoName: "",
      branch: "",
      place: "",
      startedAt: "",
      whoWon: "",
    });
    setEditingMatch(null);
  };

  const matchesForDay = matches.filter((match) => match.day === day);
  const hasMatches = matchesForDay.length > 0;

  return (
    <div className={styles.container}>
      {role === "Administrador" && (
        <>
          <h2 className={styles.title}>
            {editingMatch ? "Editar Partido" : "Agregar Partido"}
          </h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <select
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              required
              aria-label="Deporte"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona un deporte
              </option>
              {sports.map((sport, index) => (
                <option key={index} value={sport}>
                  {sport}
                </option>
              ))}
            </select>

            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              required
              aria-label="Deporte"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona una división
              </option>
              {DIVISIONS.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>

            <select
              name="teamOneName"
              value={formData.teamOneName}
              onChange={handleChange}
              required
              aria-label="Equipo 1"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona el Equipo 1
              </option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>

            <select
              name="teamTwoName"
              value={formData.teamTwoName}
              onChange={handleChange}
              required
              aria-label="Equipo 2"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona el Equipo 2
              </option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>

            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              aria-label="Rama"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona la rama
              </option>
              {BRANCHES.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>

            <select
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              aria-label="Cancha"
              className={styles.form_input}
            >
              <option value="" disabled>
                Selecciona la Cancha
              </option>
              {PLACES.map((place, index) => (
                <option key={index} value={place}>
                  {place}
                </option>
              ))}
            </select>

            <input
              type="time"
              name="startedAt"
              value={formData.startedAt}
              onChange={handleChange}
              required
              aria-label="Hora de inicio"
              className={styles.form_input}
            />

            {editingMatch ? (
              <select
                name="whoWon"
                value={formData.whoWon}
                onChange={handleChange}
                required
                aria-label="Ganador"
                className={styles.form_input}
              >
                <option value="" disabled>
                  Selecciona el ganador
                </option>
                <option value={formData.teamOneName}>
                  {formData.teamOneName}
                </option>
                <option value={formData.teamTwoName}>
                  {formData.teamTwoName}
                </option>
              </select>
            ) : (
              <input
                name="whoWon"
                placeholder="Ganador"
                value={formData.whoWon}
                onChange={handleChange}
                aria-label="Ganador"
                className={styles.form_input}
                disabled
              />
            )}

            <div className={styles.form_button_group}>
              <button
                type="submit"
                disabled={loading}
                className={styles.form_button}
              >
                {editingMatch ? "Actualizar" : "Agregar"}
              </button>
              {editingMatch && (
                <button
                  type="button"
                  onClick={resetForm}
                  className={`${styles.form_button} ${styles.form_button_cancel}`}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </>
      )}

      {loading && <p className={styles.loading}>Cargando partidos...</p>}

      {!hasMatches && (
        <p className={styles.no_matches}>
          No hay partidos programados para este día.
        </p>
      )}

      {sports.map((sport) =>
        BRANCHES.map((branch) => {
          const filteredMatches = matchesForDay.filter(
            (match) => match.sport === sport && match.branch === branch
          );

          if (filteredMatches.length === 0) return null;

          return (
            <div key={`${sport}-${branch}`} >
              
              <h2 className={styles.title}>
                Torneo de {sport} - {branch}
              </h2>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.table_header_row}>
                    <th className={styles.table_header}>Grupo</th>
                    <th className={styles.table_header}>Equipo 1</th>
                    <th className={styles.table_header}>vs</th>
                    <th className={styles.table_header}>Equipo 2</th>
                    <th className={styles.table_header}>Cancha</th>
                    <th className={styles.table_header}>Hora</th>
                    <th className={styles.table_header}>Ganador</th>
                    {role === "Administrador" && (
                      <th className={styles.table_header}>Acciones</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredMatches.map((match) => (
                    <tr key={match._id} className={styles.table_row}>
                      <td className={styles.table_cell}>{match.division}</td>
                      <td className={styles.table_cell}>{match.teamOneName}</td>
                      <td className={styles.table_cell}>vs</td>
                      <td className={styles.table_cell}>{match.teamTwoName}</td>
                      <td className={styles.table_cell}>{match.place}</td>
                      <td className={styles.table_cell}>{match.startedAt}</td>
                      <td className={styles.table_cell}>
                        {match.whoWon ?? "..."}
                      </td>
                      {role === "Administrador" && (
                        <td className={styles.table_cell}>
                          <button
                            onClick={() => handleEditClick(match)}
                            className={styles.form_button}
                          >
                            Editar
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          );
        })
      )}
    </div>
  );
}
