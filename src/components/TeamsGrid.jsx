import { Link } from "react-router-dom";

export const TeamsGrid = ({ teams }) => {

    const divisions = [...new Set(teams.map(team => team.division))];

    return (
        <div className="teamsGrid">
            {divisions.map(division => (
                <div key={division}>
                    <h5 className="division">{division} Division</h5>
                    <ul>
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