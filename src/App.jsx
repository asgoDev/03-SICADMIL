import "./styles/App.css";
import AppBodyLayout from "./AppBodyLayout";
import IncripcionMilitarGenerator from "./components/IncripcionMilitarGenerator";
import Contacto from "./components/Contacto";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <AppBodyLayout>
      <Routes>
        <Route path="SICADMIL" element={<Welcome />} />
        <Route path="/SICADMIL/inscripcion-militar-form" element={<IncripcionMilitarGenerator />} />
        <Route path="/SICADMIL/contacto" element={<Contacto />} />
      </Routes>
    </AppBodyLayout>
  );
}

export default App;
