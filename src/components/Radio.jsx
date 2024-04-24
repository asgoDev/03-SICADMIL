import { useContext } from "react";
import { ComplexInputContext } from "../context/ComplexInputContext";
import "../styles/radio.css";

function Radio() {

  const { inputConfig, inputState } = useContext(ComplexInputContext);
  const { id, options } = inputConfig;
  const [value, setValue] = inputState

  const inputControl = (e) =>{
    setValue(e.target.value)
  }
  return (
    <fieldset className="complex-input__radio-fieldset">
      {options.map((option, i) => (
        <label key={i} className="complex-input__radio-label" htmlFor={id + i}>
          <input
            className="complex-input__radio"
            id={id + i}
            name={id}
            value={option}
            type="radio"
            onClick={inputControl}
          />
          <span className="complex-input__radio-title">{option}</span>
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
