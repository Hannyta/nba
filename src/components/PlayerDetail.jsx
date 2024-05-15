import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";

export const PlayerDetail = () => {

    const [players, setStats ] = useState([]);
    const [statsTeam, setStatsTeam] = useState(null);
    const [statsPlayer, setStatsPlayer] = useState(null);

    useEffect(() => {
        get(`/season_averages?season=2023&player_ids[]=262`)
        .then((data) => {
            setStats(data);
        });
       
    }, []);
    
    console.log(stats)

    return (
        <>
       <h2>stats</h2>
        </>
    );
};
