import { DateTime } from "luxon";

export function FlightRoute({ data }) {

    const { aTime, dTime, cityFrom, cityTo, airline } = data;

    return (
        <div className="flight-route">
            {data &&
                <>
                    <h5>From: {cityFrom} To: {cityTo}</h5>
                    <p>Airline: {airline}</p>
                    <p>Departure time: {DateTime.fromMillis(dTime * 1000).toFormat('hh:mm')}</p>
                    <p>Arrival time: {DateTime.fromMillis(aTime * 1000).toFormat('hh:mm')}</p>
                </>
            }
        </div>

    )
}