import { Col, Container, Row } from "react-bootstrap";

import { useWeather } from "../context/WeatherContext";

const WeatherBox = () => {
  const { weather } = useWeather();

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src={weather.icon}
            style={{ width: "200px", height: "200px" }}
            alt="img"
          />
        </Col>
        <Col className="d-flex justify-content-around">
          <div className="f-start info">
            <h4>{weather.name}</h4>
            <h4>{weather.region}</h4>
            <h4>{weather.country}</h4>
          </div>
          <div className="f-end temperature">
            <h4>{weather.temp_c}°C</h4>
            <h4>{weather.text}</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherBox;
