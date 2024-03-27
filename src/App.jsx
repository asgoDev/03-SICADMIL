import "./styles/App.css";
import AppBodyLayout from "./AppBodyLayout";
import IncripcionMilitarGenerator from "./components/IncripcionMilitarGenerator";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import DocPreView from "./components/DocPreView";
import Info from "./components/Info";

function App() {
  return (
    <AppBodyLayout>
      <Routes>
        <Route path="SICADMIL" element={<Welcome />} />
        <Route path="/SICADMIL/inscripcion-militar-form" element={<IncripcionMilitarGenerator />} />
        <Route path="/SICADMIL/info" element={<Info />} />
        <Route path="/SICADMIL/preview" element={<DocPreView />} />
      </Routes>
    </AppBodyLayout>
  );
}

export default App;
