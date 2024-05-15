import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlayerDetail = () => {

    const [statsPlayer, setStatsPlayer] = useState(null);
    const {playerId} = useParams();

    useEffect(() => {
        get(`/season_averages?season=2023&player_ids[]=${playerId}`)
        .then((data) => {
            setStatsPlayer(data.data);
        });

    }, [playerId]);

    if (!statsPlayer) {
        return <div>Team not found average.</div>;
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