import { DropdownButton, Dropdown } from "react-bootstrap";
const OurDropDown = () => {
  return (
    <div className="select__flight">
      <div className="select__flight_dep">
        <DropdownButton id="dropdown-basic-button" title="From:">
          <Dropdown.Item href="#/action-1">Prague</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Berlin</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Warsaw</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pardubice</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="select__flight_arr">
        <DropdownButton id="dropdown-basic-button" title="To:">
          <Dropdown.Item href="#/action-1">Valencia</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Barcelona</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Madrid</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Milano</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Athens</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default OurDropDown;
