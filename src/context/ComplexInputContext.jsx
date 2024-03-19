import { createContext } from "react";

export const ComplexInputContext = createContext();

export const validateInputs = (value) => {
  return value
}

function ComplexInputContextProvider({children}) {
  return (
    <ComplexInputContext.Provider value={validateInputs}>
      {children}
    </ComplexInputContext.Provider>
  );
}

export default ComplexInputContextProvider;
