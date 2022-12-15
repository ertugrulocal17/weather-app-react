import "./App.css";
import Navigation from "./components/Navigation";
import { CityProvider } from "./context/CityContext";
import WeatherBox from "./components/WeatherBox";
import { Container, Row } from "react-bootstrap";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <Container>
          <Row>
            <Navigation />
            <WeatherBox />
          </Row>
        </Container>
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
