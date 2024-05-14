import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const TeamCard = () => {

    const [team, setTeam ] = useState(null);
    const [players, setPlayers] = useState(null);

    const { teamId } = useParams();

    useEffect(() => {
        // get(`/teams/${teamId}`)
        get(`mockAtlanta`)
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
    console.log(team)
    console.log(players);

    return (
        <div className="containerCard">
            <h2>{team.full_name}</h2>
            <p><strong>City:</strong> {team.city}</p>
            <p><strong>Conference:</strong> {team.conference}</p>
            <p><strong>Difision:</strong> {team.division}</p>
        </div>
    );
};
