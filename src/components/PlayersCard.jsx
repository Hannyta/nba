import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PlayersCard.css";

export const PlayerCard = ({player}) => {


    return (
        <div className="playerCard">
            <h5 
            className="player-name"> 
            {`${player.first_name} ${player.last_name}`} 
            </h5>
            <p><strong>Position: </strong>{player.position}</p>
            <p><strong>Jersey number: </strong>{player.jersey_number}</p>
            <p><strong>Draft year: </strong>{player.draft_year || "N/A"}</p>
            <p><strong>College: </strong>{player.college}</p>
        </div>
    );
} 