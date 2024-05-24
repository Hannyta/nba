import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../utils/conexionAPI";
import "./Player.css"

export const Players = () => {
    const [players, setPlayers] = useState(null);
    const [positionFilter, setPositionFilter] = useState("");
    const [teamFilter, setTeamFilter] = useState("");
    const [draftYearFilter, setDraftYearFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(75);
    const [topPlayers, setTopPlayers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const endpoint = `/players?page=${currentPage}&per_page=${perPage}`;

        get(endpoint).then((data) => {
            const filteredPlayers = data.data.filter(player => player.draft_year);

            setPlayers(filteredPlayers);
        });
    }, [currentPage, perPage]);

    useEffect(() => {
        get('/stats?seasons[]=2023')
            .then(data => {
                console.log("Estadísticas de los mejores jugadores:", data);
                const sortedPlayers = data.data.sort((a, b) => b.pts - a.pts);
                const topPlayers = sortedPlayers.slice(0, 10);
                setTopPlayers(topPlayers);
            })
            .catch(error => console.error('Hubo un error al obtener las estadísticas de los mejores jugadores:', error));
    }, []);

    const feetToMeters = (height) => {
        const [feet, inches] = height.split('-').map(Number);
        const totalInches = feet * 12 + inches;
        const totalMeters = totalInches * 0.0254;
        return totalMeters.toFixed(2);
    };

    let filteredPlayers = [];
    if (players) {
        filteredPlayers = players.filter(player => {
            return (
                (!positionFilter || player.position.toLowerCase().includes(positionFilter.toLowerCase())) &&
                (!teamFilter || (player.team && player.team.full_name.toLowerCase().includes(teamFilter.toLowerCase()))) &&
                (!draftYearFilter || (player.draft_year && player.draft_year.toString() === draftYearFilter))
            );
        });
    }

    const handlePlayerClick = (player) => {
        navigate(`/player/${player.id}`, { state: { player } });
    };

    return (
        <div className="players-page">
            <h2 className="title">Jugadores NBA</h2>
            <div className="filters">
                <input type="text" className="filter-input" placeholder="Filtrar por posición" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} />
                <input type="text" className="filter-input" placeholder="Filtrar por equipo" value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)} />
                <input type="text" className="filter-input" placeholder="Filtrar por año del draft" value={draftYearFilter} onChange={(e) => setDraftYearFilter(e.target.value)} />
            </div>
            <div className="player-grid">
                {filteredPlayers.map((player, index) => (
                    <div key={index} className="player-card" onClick={() => handlePlayerClick(player)}>
                        <h5 className="player-name"> 
                            {`${player.first_name} ${player.last_name}`}
                        </h5>
                        <div className="player-data">
                            <p><strong>Posición:</strong> {player.position}</p>
                            <p><strong>Altura:</strong> {feetToMeters(player.height)} m</p>
                            <p><strong>Camiseta:</strong> {player.jersey_number}</p>
                            <p><strong>Nacionalidad:</strong> {player.country}</p>
                            <p><strong>Draft Year:</strong> {player.draft_year}</p>
                        </div>
                        <div className="player-team">
                            <p><strong>Equipo:</strong> {player.team && player.team.full_name}</p>
                            <div>
                                <img src={`/assets/logoTeams/${player.team.name}.png`} alt="logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};