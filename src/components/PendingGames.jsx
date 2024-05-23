import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import "./PendingGames.css"; // Importa el archivo CSS

export const PendingGames = () => {
    const [pendingGames, setPendingGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPendingGames = async () => {
            try {
                const currentDate = new Date().toISOString().split("T")[0];
                const data = await get(`/games?start_date=${currentDate}&status=Final`);
                setPendingGames(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPendingGames();
    }, []);

    if (loading) return <p>Cargando juegos pendientes...</p>;
    if (error) return <p>Error al cargar los juegos pendientes: {error.message}</p>;

    return (
        <div className="pending-games-container">
            <h2>Juegos Pendientes</h2>
            <div className="pending-games-list">
                {pendingGames.map((game) => (
                    <div key={game.id} className="pending-game-item">
                        <div className="pending-game-details">
                            <div className="team-info">
                                <img className="team-logo" src={`/assets/logoTeams/${game.home_team.name}.png`} alt="logo"/>
                                <p className="team-name">{game.home_team.full_name}</p>
                            </div>
                            <p>Vs.</p>
                            <div className="team-info">
                                <img className="team-logo" src={`/assets/logoTeams/${game.visitor_team.name}.png`} alt="logo"/>
                                <p className="team-name">{game.visitor_team.full_name}</p>
                            </div>
                            <div className="game-info">
                                <p className=".datetime">{new Date(game.date).toLocaleDateString()}, {new Date(game.date).toLocaleTimeString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};