import "./App.css";
import { SearchResults } from "./SearchResults";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import OurDropDown from "./Dropdown";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FlightRoute } from './FlightRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <OurDropDown />
        <SearchResults from="PRG" to="VLC" />
        <Routes>
          <Route path="/" element={<SearchResults from="PRG" to="VLC" />} />
          {/* <Route path="/flight/:id" element={<FlightDetailed />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
