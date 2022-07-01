import Form from "react-bootstrap/Form";
import { useState } from "react";

const OurDropDown = ({ setFrom, setTo }) => {
  return (
    <div className="select__flight">
      <div className="select__flight_dep">
        <Form.Select size="lg" onChange={(e) => setFrom(e.target.value)}>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </Form.Select>
      </div>

      <div className="select__flight_arr">
        <Form.Select size="lg" onChange={(e) => setTo(e.target.value)}>
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default OurDropDown;
