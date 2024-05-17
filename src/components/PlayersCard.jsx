import {Link} from "react-router-dom";

import "./PlayersCard.css";

export const PlayerCard = ({player}) => {


    return (
        <div className="playerCard">
            <h5 className="player-name"> 
            <Link to={`/player/${player.id}`}>{`${player.first_name} ${player.last_name}`}</Link> </h5>
            <div className="Ptexto">
                <p><strong>Posición: </strong>{player.position}</p>
                <p><strong>Numero de camiseta: </strong>{player.jersey_number}</p>
                <p><strong>Año de Draft: </strong>{player.draft_year || "N/A"}</p>
                <p><strong>Antes de la NBA: </strong>{player.college}</p>
            </div>
        </div>  
    );
} 