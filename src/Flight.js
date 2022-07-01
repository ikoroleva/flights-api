import { DateTime } from "luxon";
import { FlightRoute } from "./FlightRoute";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function Flight({ data }) {
  //You should always display at least time of departure and arrival in local time,
  //name of the origin and departure &
  //price for the flight

  const {
    id,
    aTime,
    dTime,
    cityFrom,
    cityTo,
    price,
    airlines,
    fly_duration,
    route,
    deep_link,
  } = data;

  return (
    <div className="flight">
      {data && (
        <>
          <Card>
            <Card.Header>
              From: {cityFrom} To: {cityTo}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                From: {cityFrom} To: {cityTo}
              </Card.Title>
              <Card.Text>
                <p>Airlines: {airlines[0]}</p>
                <p>Duration: {fly_duration}</p>
                <p>
                  Departure time:{" "}
                  {DateTime.fromMillis(dTime * 1000).toFormat("hh:mm")}
                </p>
                <p>
                  Arrival time:{" "}
                  {DateTime.fromMillis(aTime * 1000).toFormat("hh:mm")}
                </p>
                <p>Price: {price} EUR</p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          {route.map((item, i) => (
            <FlightRoute key={i} data={item} />
          ))}
          <p>
            <a href={deep_link}>Detailed</a>
          </p>
        </>
      )}
    </div>
  );
}
