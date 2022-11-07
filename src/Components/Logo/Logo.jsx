import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={style.contenedorLogo}>
      <img
        src="https://lh3.googleusercontent.com/1NWSffUULql2uPj0hT_WTwSTfmUv0yuXk0Rq0Q6tpcUZbMurPESyK8W2NBqpa8SRpA=w300"
        alt="logo"
        width={50}
      />
      <p>Mi App Clima</p>
    </div>
  );
}
