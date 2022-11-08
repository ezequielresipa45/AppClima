import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.cardImage}></div>
      <div className={style.category}> {props.ciudad} </div>
      <div className={style.heading}>
        {" "}
        The temperature in {props.ciudad} is {props.temperatura} °C, a maximum
        of {props.temp_max} °C and a minimum of {props.temp_min} °C
        <div className={style.author}>
          {" "}
          By <span className={style.name}>Abi</span> 4 days ago
        </div>
      </div>
    </div>
  );
}

//   ciudad: '',
//   temperatura:'',
//   temp_min: '',
//   temp_max:'',
//   ciudadInput: '',
