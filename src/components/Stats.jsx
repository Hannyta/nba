import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";

export const Stats = ({team , players}) => {

    const [stats, setStats ] = useState([]);
    const [statsTeam, setStatsTeam] = useState(null);
    const [statsPlayer, setStatsPlayer] = useState(null);

    useEffect(() => {
        get(`/stats`)
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
