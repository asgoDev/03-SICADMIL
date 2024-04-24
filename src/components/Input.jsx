import { useContext } from "react";
import { ComplexInputContext } from "../context/ComplexInputContext";

function Input() {
  const { inputConfig, inputState } = useContext(ComplexInputContext);
  const { id, type, label, regEx = '' } = inputConfig;
  const [value, setValue] = inputState
  

  const inputControl = (e) => {
    if (!regEx) return setValue(e.target.value);
  };

  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={label}
      value={value}
      onChange={inputControl}
      autoComplete="off"
    />
  );
}

export default Input;
