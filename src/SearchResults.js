import { useEffect, useState } from "react";
import { Flight } from './Flight';

export function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);

    const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
        setSearchResults(data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="results-container">
            {searchResults &&
                <div>
                    {searchResults.map((item, i) =>
                        (<Flight key={i} data={item} />))
                    }

                </div>
            }

        </div >)
}