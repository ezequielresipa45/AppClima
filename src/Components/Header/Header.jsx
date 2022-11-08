import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={style.header}>
      <Logo />
      <Nav handleButon = {props.handleButon} />
      
    </div>
  );
}
