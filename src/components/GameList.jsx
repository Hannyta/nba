import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import { PendingGames } from "./PendingGames";

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
        <div>
            <h2>Partidos recientes de la temporada 2023 - 2024</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.home_team.full_name} vs {game.visitor_team.full_name} - {new Date(game.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
            <PendingGames/>
        </div>
    );
};