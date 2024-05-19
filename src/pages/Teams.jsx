import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { Conferences } from "../components/Conferences";

import "./Team.css";

export const Teams = () => {
    const [ teams, setTeams ] = useState([]);
    const [eastTeams, setEastTeams] = useState([]);
    const [westTeams, setWestTeams] = useState([]);

    useEffect(() => {
        get("/teams").then((data) => {
        //get("mockTeams").then((data) => {
            const allTeams = data.data;
            console.log(allTeams);
            setTeams(allTeams);
        
            const east = allTeams.filter(team => team.conference === "East");
            const west = allTeams.filter(team => team.conference === "West");

            setEastTeams(east);
            setWestTeams(west);
        });
    }, []);

    return (
        <div className="teams-container">
            <h2 className="title">Equipos NBA</h2>
            <Conferences conference="East" teams={eastTeams}/>
            <Conferences conference="West" teams={westTeams}/>
        </div>
    );
}