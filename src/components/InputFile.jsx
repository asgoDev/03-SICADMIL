import "../styles/input-file.css";

function InputFile({ id, type, placeholder, value, setValue, regEx }) {
  const inputControl = (e) => {
    if (!regEx) return setValue(e.target.value);
  };

  // <input type="file" aria-label="Archivo" name="selfie" accept="image/*" capture="user"/>
  return (
    <div className="label__input-container">
      <input
        className="input-file"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputControl}
        autoComplete="off"
        title={`${"Tome una fotografía desde su celular o seleccione de su galeria"}`}
      />
    </div>
  );
}

export default InputFile;
