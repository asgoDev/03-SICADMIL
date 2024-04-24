import { createContext, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const ComplexInputContext = createContext();

export const validateInputs = (value) => {
  return value;
};

function ComplexInputContextProvider({ children, inputConfig }) {
  const [inputValue, setInputValue] = useState("");
  const { requiredInputs, setRequiredInputs } = useContext(GlobalContext);

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
