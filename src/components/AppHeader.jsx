import mindef from "../assets/mindef.jpg";
import bnaval from "../assets/bnaval.jpg";
import "../styles/app-header.css";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__img-cont">
        <img className="app-header__img" src={mindef} alt="mindef" />
        <img className="app-header__img" src={bnaval} alt="bnaval" />
      </div>
      <nav className="app-header__nav">
        <ul className="app-header__ul">
          <li className="app-header__li">
            <hr noshade='noshade' />
          </li>
          <li className="app-header__li">
            <Link to="/SICADMIL">Inicio</Link>
          </li>
          <li className="app-header__li">
            <Link to="/SICADMIL/inscripcion-militar-form">Planilla de Incripción Militar</Link>
          </li>
          <li className="app-header__li">
            <Link to="/SICADMIL/contacto">Contacto</Link>
          </li>
          {/* <li className="app-header__li">
            <Link to="/SICADMIL/preview">Preview</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
