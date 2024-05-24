import { News } from "../components/News";
import { PendingGames } from "../components/PendingGames";
import "./Home.css"; 

export const Home = () => {
    return (
        <>
        <h1>Run And Gun</h1>
        <div className="home-container">
            <div className="pending-games">
                <PendingGames />
            </div>
            <div className="news">
                <News />
            </div>
        </div>
        </>
    );
};