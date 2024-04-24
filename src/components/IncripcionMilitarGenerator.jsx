import { useContext, useEffect, useState } from "react";
import AppSectionLayout from "../AppSectionLayout";
import "../styles/inscripcion-militar-generator.css";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

import FormSection from "./FormSection";
import militaryRegistrationFormConfig from "../data/militaryRegistrationFormConfig";

function IncripcionMilitarGenerator() {
  let { setFormData } = useContext(GlobalContext);
  const [formStep, setFormStep] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    // crear funcion que me enfoque el primer section del form al actualizar la pagina
    // if (formStep == '1'){
    //   let button = document.querySelector('.form-step--first')
    //   button.click()
    // }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formDataObject = {};
    for (let [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    setFormData(formDataObject);
    navigate("/SICADMIL/preview");
  };

  const handleSteps = (e) => {
    setFormStep(e.target.innerText);
  };

  return (
    <AppSectionLayout title={"Planilla de Inscripción Militar"}>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <div className="form__section-container">
          {militaryRegistrationFormConfig.map((section, i) => (
            <FormSection
              sectionConfigData={section}
              formStepController={formStep}
              index={i}
              key={i}
            />
          ))}
        </div>
      </form>
      <div className="form__navigation">
        <a
          href={`#personal-section`}
          className={`form-step--first ${
            formStep == "1" && "form-step--selected"
          }`}
          onClick={handleSteps}
        >
          1
        </a>
        <a
          href={`#socio-econom-section`}
          className={`${formStep == "2" && "form-step--selected"}`}
          onClick={handleSteps}
        >
          2
        </a>
        <a
          href={`#militar-section`}
          className={`${formStep == "3" && "form-step--selected"}`}
          onClick={handleSteps}
        >
          3
        </a>
      </div>
    </AppSectionLayout>
  );
}

export default IncripcionMilitarGenerator;
