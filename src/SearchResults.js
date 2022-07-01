import { useEffect, useState } from "react";
import { Flight } from "./Flight";

export function SearchResults(props) {
  const [searchResults, setSearchResults] = useState(null);
  const [showSpinner, setShowSpinner] = useState("");
  const url = `https://api.skypicker.com/flights?fly_from=${props.from}&fly_to=${props.to}&partner=data4youcbp202106`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSearchResults(data.data);
    // if (data.data) {
    //     setSearchResults(data.data);
    // } else {
    //     {
    //         alert(data.error);
    //     }
    // }

    console.log(data.data);
  };

  //   const Spinner = () => {
  //     return <img src="../img/spinner.svg" alt="spinner" />;
  //   };

  useEffect(() => {
    fetchData();
    setShowSpinner("");
  }, [props]);

  return (
    searchResults && (
      <div className="results-container">
        <div style={{ display: "none" }}>
          <img src="../img/spinner.svg" alt="spinner" />
        </div>
        <div>
          {searchResults.map((item, i) => (
            <Flight key={i} data={item} />
          ))}
        </div>
      </div>
    )
  );
}
