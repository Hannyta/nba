import { TeamsGrid } from "./TeamsGrid"

export const Conferences = ({ conference, teams }) => {

    return (
        <div className="cardConferences">
            <h3 className="conference">Conferencia {conference} </h3>
            < TeamsGrid teams={teams}/>
        </div>
    );
}