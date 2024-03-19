import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const isAllInputsChecked = (inputsObj) => {
  if(!inputsObj) return
  let values = Object.values(inputsObj)
  console.log(values.every(element => element)); 
}

function GlobalContextProvider(props) {
  const [requiredInputs, setRequiredInputs] = useState({});
  useEffect(()=>{
    isAllInputsChecked(requiredInputs)
  }, [requiredInputs])


  return (
    <GlobalContext.Provider value={{ requiredInputs, setRequiredInputs }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
