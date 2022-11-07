import style from "./Card.module.css";


export default function Card(props) {
   

    if (props.climaData.ciudad !== '' ){

   
    
        return (
    <div className={style.card}>  
    <div className={style.cardImage}></div>
    <div className={style.category}> {props.climaData.ciudad} </div>
    <div className={style.heading}> The temperature in {props.climaData.ciudad} is {props.climaData.temperatura} °C, a maximum of {props.climaData.temp_max} °C and a minimum of {props.climaData.temp_min} °C 
        <div className={style.author}> By <span className={style.name}>Abi</span> 4 days ago</div>
    </div>


</div>










        
    
    );

}else{

    return(
        <>
        
            <h1>Ingrese una ciudad en el campo Search</h1>
        </>
    )
}



  }



//   ciudad: '',
//   temperatura:'',
//   temp_min: '',
//   temp_max:'',
//   ciudadInput: '',