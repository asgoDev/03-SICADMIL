import AppSectionLayout from "../AppSectionLayout";
import "../styles/doc-preview.css";
import Planilla from "./Planilla";

function DocPreView() {
  return (
    <AppSectionLayout>
      <div className="doc-container">
        <Planilla />
      </div>
    </AppSectionLayout>
  );
}

export default DocPreView;
