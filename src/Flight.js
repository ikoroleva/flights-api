import { DateTime } from "luxon";

export function Flight({ data }) {
  //You should always display at least time of departure and arrival in local time,
  //name of the origin and departure &
  //price for the flight

  const { aTime, dTime, cityFrom, cityTo, price, airlines } = data;

  return (
    <>
      {data && (
        <div className="flight">
          <h3>
            From: {cityFrom} To: {cityTo}
          </h3>
          <p>Airlines: {airlines[0]}</p>
          <p>
            Arrival time: {DateTime.fromMillis(aTime * 1000).toFormat("hh:mm")}
          </p>
          <p>
            Departure time:{" "}
            {DateTime.fromMillis(dTime * 1000).toFormat("hh:mm")}
          </p>
          <p>Price: {price} EUR</p>
        </div>
      )}
    </>
  );
}
