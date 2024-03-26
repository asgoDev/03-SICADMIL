import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/complex-input.css";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import InputFile from "./InputFile";

function ComplexInput({ inputConfig = {}, width }) {
  const {
    id,
    label = "label",
    type = "text",
    options = [],
    required,
    title,
  } = inputConfig;
  const [inputValue, setInputValue] = useState("");
  const { requiredInputs, setRequiredInputs } = useContext(GlobalContext);

  useEffect(() => {
    if (required) {
      setRequiredInputs((prevState) => {
        let objeto = { ...requiredInputs };
        objeto[id] = inputValue;
        return { ...prevState, ...objeto };
      });
    }
  }, [inputValue]);

  // const formatInput = (e) => {

  //   let value = e.target.value;
  //   // Quitar cualquier caracter que no sea un número
  //   value = value.replace(/[^0-9]/g, "");

  //   // Aplicar el formato V##.###.###
  //   if (value.length > 3) {
  //     // value = "V" + value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  //     value = "V" + value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  //   }
  //   // Establecer el value formateado en el input
  //   setInputValue(value);
  // };

  const chooseElement = () => {
    if (type == "select")
      return (
        <Select
          id={id}
          options={options}
          value={inputValue}
          setValue={setInputValue}
          title={title}
        />
      );
    if (type == "radio")
      return (
        <Radio
          id={id}
          options={options}
          value={inputValue}
          setValue={setInputValue}
          title={title}
        />
      );
    if (type == "file")
      return (
        <InputFile
          id={id}
          type={type}
          placeholder={label}
          value={inputValue}
          setValue={setInputValue}
        />
      );
    return (
      <Input
        id={id}
        type={type}
        placeholder={label}
        value={inputValue}
        setValue={setInputValue}
        title={title}
      />
    );
  };

  return (
    <label
      className={`complex-input-label ${required && "required"}`}
      htmlFor={id}
    >
      <span
        className={`complex-input-label__title ${
          (inputValue ||
            type == "date" ||
            type == "select" ||
            type == "radio") &&
          "t-translate-0"
        }`}
      >
        {label}
      </span>
      {chooseElement()}
    </label>
  );
}

export default ComplexInput;
