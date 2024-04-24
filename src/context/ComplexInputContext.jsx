import { createContext, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const ComplexInputContext = createContext();

// const validateInputs = (value) => {
//   return value;
// };

function ComplexInputContextProvider({ children, inputConfig }) {
  const [inputValue, setInputValue] = useState("");
  const { requiredInputs, setRequiredInputs } = useContext(GlobalContext);
  const { required, id } = inputConfig;

  // si el input es requerido, añade la referencia del input a un array
  // utilizado para verificar si todos los capos requeridos fueron llenados.
  useEffect(() => {
    if (required) {
      setRequiredInputs((prevState) => {
        let objeto = { ...requiredInputs };
        objeto[id] = inputValue;
        return { ...prevState, ...objeto };
      });
    }
  }, [inputValue]);

  const contextValue = {
    inputConfig,
    inputState: [inputValue, setInputValue],
  };

  return (
    <ComplexInputContext.Provider value={contextValue}>
      {children}
    </ComplexInputContext.Provider>
  );
}

export default ComplexInputContextProvider;
