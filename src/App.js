import Header from "./Components/Header/Header.jsx";
import CardClima from "./Components/CardClima/CardClima.jsx";
import "./App.css";
import React, {useEffect, useState } from "react";
import axios from 'axios';

let arreglo = [];

function App() {
  


  const [guardador, setGuardador] = useState()

 

  const [clima, setClima] = useState([]);

  const obtenerCiudad = (e)=> {

    const ciudadInput = e.target.value;
    
    setClima({...clima, ciudadInput : ciudadInput})
    
    };

   

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${clima.ciudadInput}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
    .then((resp) => {
if(resp.data){

  let ciudad = {ciudad: resp.data.name, temperatura: resp.data.main.temp, temp_min:resp.data.main.temp_min, temp_max:resp.data.main.temp_max}
         
  
  arreglo.push(ciudad);
  setGuardador(arreglo)
  

}

});

  };
  


  
  



 
  return (
    <div className="App">
      <Header 
      
      ciudad = {obtenerCiudad}
      
      handleButon = {handleSubmit}

     
      />


      <CardClima
      climaData = {guardador}
      />
    </div>
  );
}

export default App;
