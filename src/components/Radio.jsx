import "../styles/radio.css";

function Radio({ id, value, setValue, options }) {
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
