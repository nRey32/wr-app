import React from "react";
export default function Weatherinfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 id="city">Mirande</h1>
          <ul>
            <li>
              Last updated: <span id="dateTime">Tuesday 16:33</span>
            </li>
            <li id="condition"></li>
            <li>
              Humidity: <strong id="humidity"></strong>
              <strong> 90%</strong>
            </li>
            <li>
              Wind:
              <strong id="wind"></strong>
              <strong> 11km/h</strong>
            </li>
          </ul>
        </div>
        <div classNme="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <canvas width="52" height="52"></canvas>
            <div>
              <span id="temperature" className="temperature"></span>
              <span className="unit">-5°C</span>
              <img
                src="https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/snow-512.png"
                alt=""
                id="icon"
                width="100"
              />
            </div>
          </div>
          <div className="side">
            <ul>
              <li>
                UV index: <strong id="uvIndex"></strong>
                <strong>
                  {" "}
                  2/11<sup>+</sup>
                </strong>
              </li>
              <li>
                Air index: <strong id="air"></strong>
                <strong> 10 (</strong>
                <strong id="airEval">good</strong>
                <strong>)</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
