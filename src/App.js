import Header from "./Components/Header/Header.jsx";
import CardClima from "./Components/CardClima/CardClima.jsx";
import "./App.css";
import React, {useState } from "react";
import axios from 'axios';



function App() {

  


  const [clima, setClima] = useState({
    ciudad: '',
    temperatura:'',
    temp_min: '',
    temp_max:'',
    ciudadInput: '',
  });

  const [cajaClimas, setCajaClimas] = useState([])

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
      // console.log(resp.data);
       setClima({...clima, ciudad: resp.data.name, temperatura: resp.data.main.temp, temp_min:resp.data.main.temp_min, temp_max:resp.data.main.temp_max   });



       
      });
      
      setCajaClimas(cajaClimas.push({...clima}));
    
  };
  
  
  console.log(cajaClimas);



 
  return (
    <div className="App">
      <Header 
      
      ciudad = {obtenerCiudad}
      
      handleButon = {handleSubmit}

     
      />


      <CardClima
      climaData = {clima}
      />
    </div>
  );
}

export default App;
