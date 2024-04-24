import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ComplexInput from "./ComplexInput";

const FormFieldset = ({ fieldsetConfigData }) => {
  const { fieldsetName, inputList } = fieldsetConfigData;

  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{fieldsetName}</legend>
      {inputList.map((inputConfig, i) => {
        return <ComplexInput key={i} inputConfig={inputConfig} />;
      })}
    </fieldset>
  );
};

const FormSection = ({ sectionConfigData, formStepController, index }) => {
  let { isAllInputOk } = useContext(GlobalContext);
  const { id, title, config, submit } = sectionConfigData;

  return (
    <section id={id} className={`form__section ${formStepController == (index + 1) && 'form__section--onfocus'}`}>
      <h2 className="form__subtitle">{title}</h2>
      {config.map((fieldsetConfig, i) => {
        return <FormFieldset key={i} fieldsetConfigData={fieldsetConfig} />;
      })}
      <p className="form__advise">
        Todos los campos marcados con asterisco (
        <span className="form__advise-span">*</span>) son obligatorios
      </p>
      {submit && (
        <input
          className="form__submit"
          type="submit"
          value={submit.value}
          disabled={!isAllInputOk}
        />
      )}
    </section>
  );
};

export default FormSection;
