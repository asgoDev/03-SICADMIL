import "./styles/app-body-layout.css";
import AppHeader from "./components/AppHeader";
import { Link } from "react-router-dom";

function AppBodyLayout({ children }) {
  return (
    <div className="general-container">
      <AppHeader />
      <div className="app-content">{children}</div>
      <footer className="app-footer"><p>proyecto no oficial. <Link to="/SICADMIL/info">Mas información.</Link></p></footer>
    </div>
  );
}

export default AppBodyLayout;
