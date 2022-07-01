import { useEffect, useState } from "react";
import { Flight } from "./Flight";

export function SearchResults(props) {
  const [searchResults, setSearchResults] = useState(null);

  const url = `https://api.skypicker.com/flights?fly_from=${props.from}&fly_to=${props.to}&partner=data4youcbp202106`;
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);

    setSearchResults(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [props]);

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
