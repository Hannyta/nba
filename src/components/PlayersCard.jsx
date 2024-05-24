import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlayersCard.css";

export const PlayerCard = ({ player }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/player/${player.id}`, { state: { player } });
    };

    return (
        <div className="player-card" onClick={handleClick}>
            <h5 className="player-name">{`${player.first_name} ${player.last_name}`}</h5>
            <div className="player-info">
                <p className="player-info-item"><strong>Posición:</strong> {player.position}</p>
                <p className="player-info-item"><strong>Número de camiseta:</strong> {player.jersey_number}</p>
                <p className="player-info-item"><strong>Año de Draft:</strong> {player.draft_year || "N/A"}</p>
                <p className="player-info-item"><strong>Antes de la NBA:</strong> {player.college}</p>
            </div>
        </div>  
    );
};