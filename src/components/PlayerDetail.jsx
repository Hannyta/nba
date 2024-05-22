import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PlayerDetail.css";

export const PlayerDetail = () => {

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
        return <div className="error-message">No se encontraron promedios para esta temporada.</div>;
    }

    return (
        <div className="container PlayerDetail">
            <h2 className="title">Promedios de la temporada 2023-2024</h2>
            <p><strong>Puntos: </strong> {statsPlayer[0].pts} </p>
            <p><strong>Asistencias: </strong> {statsPlayer[0].ast} </p>
            <p><strong>Bloqueos: </strong> {statsPlayer[0].blk} </p>
            <p><strong>Rebotes: </strong> {statsPlayer[0].reb} </p>
            <p><strong>Robos: </strong> {statsPlayer[0].stl} </p>
        </div>
    );
};