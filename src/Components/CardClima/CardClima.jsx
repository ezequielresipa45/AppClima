import style from "./CardClima.module.css";
import Card from "../Card/Card.jsx";

export default function CardClima(props) {

   


  return (
    <div className={style.contenedorCardClima}>



      <Card 
      
      climaData = {props.climaData}
      
      />
    </div>
  );
}
