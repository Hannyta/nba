import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import { PendingGames } from "../components/PendingGames";
import "./GameList.css";

export const GameList = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [perPage, setPerPage] = useState(50);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const startDate = "2024-05-01"; 
                const endDate = "2024-05-22"; 
                const data = await get(`/games?start_date=${startDate}&end_date=${endDate}&per_page=${perPage}`);
                setGames(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [perPage]);

    if (loading) return <p>Cargando juegos...</p>;
    if (error) return <p>Error al cargar los juegos: {error.message}</p>;

    return (
        <div className="container_GameList">
            <div className="sidebar">
                <PendingGames />
            </div>
            <div className="main-content">
                <h2>Partidos recientes de la temporada 2023 - 2024</h2>
                <div className="game-list">
                    {games.map((game) => (
                        <div key={game.id} className="game-card">
                            <div className="teams">
                                <div className="team">
                                    <img src={`/assets/logoTeams/${game.home_team.name}.png`} alt={game.home_team.full_name} className="team-logo" />
                                    <p className="team_score">{game.home_team_score}</p>
                                    <p className="team_fullName">{game.home_team.full_name}</p>
                                </div>
                                <div className="vs">Vs.</div>
                                <div className="team">
                                    <img src={`/assets/logoTeams/${game.visitor_team.name}.png`} alt={game.visitor_team.full_name} className="team-logo" />
                                    <p className="team_score">{game.visitor_team_score}</p>
                                    <p className="team_fullName">{game.visitor_team.full_name}</p>
                                </div>
                            </div>
                            <div className="date-time">
                                <p>{new Date(game.date).toLocaleDateString()}</p>
                            </div>
                            <div className="description">
                                <p>{game.summary}</p>
                            </div>
                            <div className="button">
                                <button onClick={() => viewSummary(game.id)}>Ver resumen</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const viewSummary = (gameId) => {
    // Lógica para mostrar el resumen del juego
};