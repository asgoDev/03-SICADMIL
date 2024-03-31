import bandera from "../assets/bandera.jpg";
import gobbol from "../assets/gobbol.jpg";
import mindeftext from "../assets/mindeftext.jpg";
import bnaval from "../assets/bnaval.jpg";
import "../styles/app-header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AppHeader() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="app-header">
      <div className="app-header__img-container">
        <div className="app-header__left-panel">
          <img className="app-header__img app-header__img--bandera" src={bandera} alt="mindef" />
          <img className="app-header__img app-header__img--gobbol" src={gobbol} alt="mindef" />
          <img className="app-header__img app-header__img--mindeftext" src={mindeftext} alt="mindef" />
        </div>
        <img className="app-header__img app-header__img--bnaval" src={bnaval} alt="bnaval" />
      </div>
      <nav className="app-header__nav">
        <label className="header__ico-menu-label" htmlFor="header__menu-btn">
          <div className={`hamburger ${isChecked ? "is-active" : ""}`}>
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
          </div>
        </label>
        <input
          className="header__menu-toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          id="header__menu-btn"
        />
        <ul className="app-header__ul">
          <li className="app-header__li">
            <hr noshade="noshade" />
          </li>
          <li className="app-header__li" onClick={handleCheck}>
            <Link to="/SICADMIL">Inicio</Link>
          </li>
          <li className="app-header__li" onClick={handleCheck}>
            <Link to="/SICADMIL/inscripcion-militar-form">
              Planilla de Incripción Militar
            </Link>
          </li>
          {/* <li className="app-header__li">
            <Link to="/SICADMIL/info">Info</Link>
          </li> */}
          {/* <li className="app-header__li">
            <Link to="/SICADMIL/preview">Preview</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
