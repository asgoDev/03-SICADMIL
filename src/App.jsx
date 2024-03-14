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
        <Route path="/" element={<Welcome />} />
        <Route path="form-planilla" element={<IncripcionMilitarGenerator />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </AppBodyLayout>
  );
}

export default App;
