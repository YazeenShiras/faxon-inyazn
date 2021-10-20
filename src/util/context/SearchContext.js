import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchStateProvider = (props) => {
  // eslint-disable-next-line
  const [inputVal, setInputVal] = useState("");

  return (
    <SearchContext.Provider value={[inputVal, setInputVal]}>
      {props.children}
    </SearchContext.Provider>
  );
};
