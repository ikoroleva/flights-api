import "./App.css";
import { SearchResults } from "./SearchResults";
import OurDropDown from "./Dropdown";
import { DropdownButton, Dropdown } from "react-bootstrap";

function App() {
  return (
    <div>
      <OurDropDown />
      <SearchResults from="PRG" to="VLC" />
    </div>
  );
}

export default App;
