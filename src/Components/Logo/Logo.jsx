import style from "./Logo.module.css";
import imagenLogo from '../../images/logo.png';

export default function Logo() {
  return (
    <div className={style.contenedorLogo}>
      <img
        src={imagenLogo}
        alt="logo"
        width={50}
      />
      <p>Mi App Clima</p>
    </div>
  );
}
