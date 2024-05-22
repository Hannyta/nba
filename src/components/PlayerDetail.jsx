import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./PlayerDetail.css";


export const PlayerDetail = () => {
    
    const location = useLocation();
    const player = location.state.player;

    const [statsPlayer, setStatsPlayer] = useState(null);
    const {playerId} = useParams();

    useEffect(() => {
        get(`/season_averages?season=2023&player_ids[]=${playerId}`)
        .then((data) => {
            setStatsPlayer(data.data);
        })
        .catch((error) => {
            console.error("Error fetching player stats:", error);
            setStatsPlayer([]); 
        });
    }, [playerId]);

    if (!statsPlayer) {
        return <div className="error-message">Loading...</div>;
    } else if (statsPlayer.length === 0) {
        return <div className="error-message">⚠️ No se encontraron promedios para esta temporada.</div>;
    }

    const feetToMeters = (height) => {
        const [feet, inches] = height.split('-').map(Number);
        const totalInches = feet * 12 + inches;
        const totalMeters = totalInches * 0.0254;
        return totalMeters.toFixed(2);
    };

    return (
        <div className="container PlayerDetail">
            <h2 className="title">Promedios de la temporada 2023-2024</h2>

            <h3>{`${player.first_name} ${player.last_name}`}</h3>

            <div className="player-info">
                <div>
                    <img src={`/assets/logoTeams/${player.team.name}.png`} alt="logo"/>
                </div>
                <p><strong>Equipo:</strong> {player.team && player.team.full_name}</p>
                <p><strong>Posición:</strong> {player.position}</p>
                <p><strong>Altura: </strong>{feetToMeters(player.height)} m</p>
                <p><strong>Camiseta:</strong> {player.jersey_number}</p>
                <p><strong>Nacionalidad:</strong> {player.country}</p>
                <p><strong>Draft Year:</strong> {player.draft_year}</p>
            </div>
            <br />
            <div className="player-average">
                <table>
                    <thead>
                        <tr>
                            <th>Estadística</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Puntos</strong></td>
                            <td>{statsPlayer[0].pts}</td>
                        </tr>
                        <tr>
                            <td><strong>Asistencias</strong></td>
                            <td>{statsPlayer[0].ast}</td>
                        </tr>
                        <tr>
                            <td><strong>Bloqueos</strong></td>
                            <td>{statsPlayer[0].blk}</td>
                        </tr>
                        <tr>
                            <td><strong>Rebotes</strong></td>
                            <td>{statsPlayer[0].reb}</td>
                        </tr>
                        <tr>
                            <td><strong>Robos</strong></td>
                            <td>{statsPlayer[0].stl}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};