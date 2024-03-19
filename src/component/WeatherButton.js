import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="button-box">
      <Button variant="secondary">Current Location</Button>
      <Button variant="secondary">Paris</Button>
      <Button variant="secondary">New York</Button>
    </div>
  );
};

export default WeatherButton;
