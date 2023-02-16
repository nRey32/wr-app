import "./styles.css";

import Searchform from "./Searchform";
import WeatherInfo from "./Weatherinfo";
import Weatherforecast from "./Weatherforecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <Searchform />
          <WeatherInfo />
          <Weatherforecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
