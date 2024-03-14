import React from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider value={"hola"}>{props.children}</GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
