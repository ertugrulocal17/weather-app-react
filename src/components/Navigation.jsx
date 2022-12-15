import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { cities } from "../assets/cities";

import { useCity } from "../context/CityContext";
const Navigation = () => {
  const { setCity } = useCity();
  const handleChange = e => {
    setCity(e.target.value);
  };
  return (
    <Container className="mt-5">
      <Row>
        <select onChange={handleChange} className="form-select">
          {cities.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </Row>
    </Container>
  );
};

export default Navigation;
