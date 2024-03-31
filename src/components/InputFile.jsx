import "../styles/input-file.css";
import camera from "../assets/camera.png";
import { useEffect } from "react";

function InputFile({ id, type, placeholder, value, setValue }) {


  const inputControl = (e) => {
    setValue((e.target.files[0]))
  };

 
  // useEffect(()=>{
  //   console.log(URL.createObjectURL(value));
  // }, [value])

  // <input type="file" aria-label="Archivo" name="selfie" accept="image/*" capture="user"/>
  return (
    <div className="label__input-container">
      <input
        className="input-file"
        id={id}
        name={id}
        type={type}
        accept="image/*"
        placeholder={placeholder}
        onChange={inputControl}
        title={`${"Tome una fotografía desde su celular o seleccione de su galeria"}`}
      />
      <div className="label__input-container-mask">
      {/* <img src={value ? URL.createObjectURL(value) : ''} alt="" style={{width: '50px',height: '50px', position: 'absolute', left: '0',zIndex:'10'}} /> */}

        <span className="input-file__fake-btn">{value ? `${value.name}`:'Cargar imagen...'}</span>
        <img className="input-file__img" src={camera} alt="" />
      </div>
    </div>
  );
}

export default InputFile;
