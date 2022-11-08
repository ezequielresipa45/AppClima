import style from "./CardClima.module.css";
import Card from "../Card/Card.jsx";

export default function CardClima(props) {
  return (
    <div className={style.contenedorCardClima}>
      {props.climaData ? (
        props.climaData.map((card) => (
          <Card
            key={card.ciudad}
            ciudad={card.ciudad}
            temperatura={card.temperatura}
            temp_max={card.temp_max}
            temp_min={card.temp_min}
          />
        ))
      ) : (
        <h2>Ingrese una ciudad en el buscador</h2>
      )}
    </div>
  );
}
