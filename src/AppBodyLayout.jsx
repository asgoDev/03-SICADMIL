import "./styles/app-body-layout.css";
import AppHeader from "./components/AppHeader";

function AppBodyLayout({ children }) {
  return (
    <div className="general-container">
      <AppHeader />
      <div className="app-content">{children}</div>
      <footer className="app-footer">proyecto no oficial</footer>
    </div>
  );
}

export default AppBodyLayout;
