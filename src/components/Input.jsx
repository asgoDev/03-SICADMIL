
function Input({ id, type, placeholder, value, setValue, regEx }) {

  const inputControl = (e) => {
    if(!regEx) return setValue(e.target.value)
  };

  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputControl}
      autoComplete="off"
      title={`${'Indique con una X si recibió o no instrucción premilitar'}`}
    />
  );
}

export default Input;
