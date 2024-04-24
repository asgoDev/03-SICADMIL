import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ComplexInputContext } from "../context/ComplexInputContext";
import "../styles/complex-input.css";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import InputFile from "./InputFile";


function ComplexInput() {
  const {inputConfig, inputState} = useContext(ComplexInputContext)
  const {required, title, id, type, label, options} = inputConfig
  const [inputValue, setInputValue] = inputState


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
  

  const chooseElement = () => {
    if (type == "select")
      return (
        <Select
          id={id}
          options={options}
          value={inputValue}
          setValue={setInputValue}
        />
      );
    if (type == "radio")
      return (
        <Radio
          id={id}
          options={options}
          value={inputValue}
          setValue={setInputValue}
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
      />
    );
  };

  return (
    <label
      className={`complex-input-label ${required && "required"}`} title={title}
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
