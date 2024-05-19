import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayerCard } from "./PlayersCard";

import "./TeamCard.css";

export const TeamCard = () => {

    const [team, setTeam ] = useState(null);
    const [players, setPlayers] = useState(null);
    const [thisTeam, setThisTeam] = useState(null);
    const { teamId } = useParams();

    useEffect(() => {
            get("/teams").then((data) => {
                const allTeamsData = data.data;
                setThisTeam(allTeamsData.find(el => el.id === parseInt(teamId)));
                console.log(thisTeam);
                setTeam(thisTeam); 
            });
    }, [teamId]);

    useEffect(() => {
        get(`/teams/${teamId}`)
        .then((data) => {
            setTeam(data.data);
        });
       
    }, [teamId]);

    useEffect(() => {
        get(`/players?team_ids[]=${teamId}`)
        .then((data) => {
            setPlayers(data.data);
        });
        
    }, [teamId]);
   

    if (!team) {
        return <div>Team not found.</div>;
    }
    
    return (
        <div className="container">
            <div className="CardTeam">
                <img src={`/assets/logoTeams/${team.name}.png`} alt="logo"/>
                <h2>{team.full_name}</h2>
                <p><strong>City:</strong> {team.city}</p>
                <p><strong>Conference:</strong> {team.conference}</p>
                <p><strong>Division:</strong> {team.division}</p>
            </div>
            <div className="players">
                {players && players.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
            </div>
        </div>
    );
};
