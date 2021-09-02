import React from "react";
import SearchSection from "./SearchSection";
import Cities from "./Cities";
import WeatherDetails from "./WeatherDetails";
function SidePanel() {
  return (
    <div className="window__side-panel">
      <SearchSection />
      <Cities />
      <div className="line"></div>
      <WeatherDetails />
      <div className="line"></div>
    </div>
  );
}

export default SidePanel;
