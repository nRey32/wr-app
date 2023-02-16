import React from "react";
export default function Searchform() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            id="city-input"
            placeholder="Enter a city.."
            className="form-control search-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3 p-0">
          <input type="submit" class="btn btn-primary w-100" value="Search" />
        </div>
        <div className="col-3">
          <input
            type="submit"
            id="current-location"
            className="btn btn-primary w-100"
            value="Your Location"
          />
        </div>
      </div>
    </form>
  );
}
