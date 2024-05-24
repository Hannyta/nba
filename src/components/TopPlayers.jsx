import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import "./TopPlayers.css";

export const TopPlayers = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    get('/stats?seasons[]=2023')
      .then(data => {
        console.log("Estadísticas de jugadores:", data);
        const sortedPlayers = data.data.sort((a, b) => b.pts - a.pts);
        const topPlayers = sortedPlayers.slice(0, 10);
        setTopPlayers(topPlayers);
      })
      .catch(error => console.error('Hubo un error al obtener las estadísticas de los jugadores:', error));
  }, []);

  return (
    <div className="top-player">
      <h3>Jugadores 🔥</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Promedio de Puntos</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map(player => (
            <tr key={player.player.id}>
              <td>{player.player.first_name} {player.player.last_name}</td>
              <td>{player.pts.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}