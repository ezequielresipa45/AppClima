import Header from "./Components/Header/Header.jsx";
import CardClima from "./Components/CardClima/CardClima.jsx";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [clima, setClima] = useState([]);

  const handleSubmit = (climaParam) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${climaParam}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
      )
      .then((resp) => {
        if (resp.data) {
          let ciudad = {
            ciudad: resp.data.name,
            temperatura: resp.data.main.temp,
            temp_min: resp.data.main.temp_min,
            temp_max: resp.data.main.temp_max,
          };

          setClima([...clima, ciudad]);
        }
      });
  };

  return (
    <div className="App">
      <Header handleButon={handleSubmit} />

      <CardClima climaData={clima} />
    </div>
  );
}

export default App;
