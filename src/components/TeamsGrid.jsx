import { Link } from "react-router-dom";
import "./TeamsGrid.css";

export const TeamsGrid = ({ teams }) => {

    const divisions = [...new Set(teams.map(team => team.division))];

    return (
        <div className="teamsGrid">
            {divisions.map(division => (
                <div className="division-container" key={division}>
                    <h5 className="division-title">{division} Division</h5>
                    <ul className="teams-list">
                        {teams.filter(team => team.division === division).map(team => (
                            <li key={team.id}>
                                <Link to={`/teams/${team.id}`}  className="linkTeam" >{team.full_name}</Link>
                                <p>
                                    <strong>City: </strong>{team.city}
                                </p>
                            </li>
                        ))}                     
                    </ul>
                </div>
            ))}
        </div>
    );
}