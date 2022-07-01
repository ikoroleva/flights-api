import Form from "react-bootstrap/Form";
import { useState } from "react";

const OurDropDown = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="select__flight">
      <div className="select__flight_dep">
        <Form.Select size="lg">
          <option>Prague</option>
          <option>Berlin</option>
          <option>Warsaw</option>
          <option>Pardubice</option>
        </Form.Select>
      </div>
      <div className="select__flight_from">{from}</div>
      <div className="select__flight_arr">
        <Form.Select size="lg">
          <option>Valencia</option>
          <option>Barcelona</option>
          <option>Madrid</option>
          <option>Milano</option>
          <option>Athens</option>
        </Form.Select>
      </div>
      <div className="select__flight_to"></div>
    </div>
  );
};

export default OurDropDown;
