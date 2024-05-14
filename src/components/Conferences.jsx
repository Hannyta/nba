import { TeamsGrid } from "./TeamsGrid"

export const Conferences = ({ conference, teams }) => {

    return (
        <div className="cardConferences">
            <h3 className="conference">{conference} Conference</h3>
            < TeamsGrid teams={teams}/>
        </div>
    );
}