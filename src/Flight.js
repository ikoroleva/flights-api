import { DateTime } from "luxon";
import { FlightRoute } from "./FlightRoute";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Flight({ data }) {
  //You should always display at least time of departure and arrival in local time,
  //name of the origin and departure &
  //price for the flight

  const [showRoute, setShowRoute] = useState("none");
  const [textBtn, setTextBtn] = useState("Further details");
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

  const handleOnChange = () => {
    if (showRoute == "none") {
      setShowRoute("");
      setTextBtn("Hide details");
    } else {
      setShowRoute("none");
      setTextBtn("Further details");
      console.log(showRoute);
    }
  };

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
              <div className="route_details" style={{ display: showRoute }}>
                <Card.Text>
                  {route.map((item, i) => (
                    <FlightRoute key={i} data={item} />
                  ))}
                  <Button
                    variant="success"
                    href={deep_link}
                    style={{ marginBottom: 20 }}
                  >
                    I like it!
                  </Button>{" "}
                </Card.Text>
              </div>
              <Button variant="primary" onClick={() => handleOnChange()}>
                {textBtn}
              </Button>
            </Card.Body>
          </Card>

          {/* {route.map((item, i) => (
            <FlightRoute key={i} data={item} />
          ))}
          <p>
            <a href={deep_link}>Detailed</a>
          </p> */}
        </>
      )}
    </div>
  );
}
