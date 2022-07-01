import { useEffect, useState } from "react";
import { Flight } from "./Flight";

export function SearchResults(props) {
  const url = `https://api.skypicker.com/flights?fly_from=${props.from}&fly_to=${props.to}&partner=data4youcbp202106`;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="results-container">
      {searchResults ? (
        <div>
          {searchResults.map((item, i) => (
            <Flight key={i} data={item} />
          ))}
        </div>
      ) : (
        <img src="../img/spinner.svg" alt="spinner" />
      )}
    </div>
  );
}
