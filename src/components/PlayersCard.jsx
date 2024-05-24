import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlayersCard.css";

export const PlayerCard = ({ player }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/player/${player.id}`, { state: { player } });
    };

    const getImagePath = () => {
        if (player.position === "F") {
            return "/assets/Position/R3.png";
        } else if (player.position === "G") {
            return "/assets/Position/R2.png";
        } else if (player.position === "G-F") {
            return "/assets/Position/R.png";
        } else if (player.position === "C-F") {
            return "/assets/Position/R1.png";
        } else if (player.position === "C") {
            return "/assets/Position/R6.png";
        } else {
            return "/assets/Position/R5.png";
        }
    };

    return (
        <div className="player-card" onClick={handleClick}>
            <img src={getImagePath()} alt={`${player.first_name} ${player.last_name}`} />
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