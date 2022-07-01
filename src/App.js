import "./App.css";
import { SearchResults } from "./SearchResults";
import OurDropDown from "./Dropdown";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>
      <OurDropDown setFrom={setFrom} setTo={setTo} />
      <SearchResults from={from} to={to} />
    </div>
  );
}

export default App;
