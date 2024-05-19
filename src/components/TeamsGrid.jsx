import { Link } from "react-router-dom";
import "./TeamsGrid.css";

export const TeamsGrid = ({ teams }) => {

    const divisions = [...new Set(teams.map(team => team.division))];

    return (
        <div className="teamsGrid">
            {divisions.map(division => (
                <div className="division-container" key={division}>
                    <h5 className="division-title">{division} Division</h5>
                    <ul>
                        {teams.filter(team => team.division === division).map(team => (
                            <li className="linkTeam" key={team.id}>
                                <Link to={`/teams/${team.id}`}>
                                    <div className="containerTeam"> 
                                    <h3 className="nameTeam">{team.full_name}</h3>
                                        <p>
                                            <strong>Ciudad: </strong>{team.city}
                                        </p>
                                        <img src={`/assets/logoTeams/${team.name}.png`} alt="logo"/>
                                    </div>
                                </Link>
                            </li>
                        )
                    )}                
                    </ul>
                </div>
            ))}
        </div>
    );
}