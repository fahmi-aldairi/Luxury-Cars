import { createContext, useEffect, useState } from "react";

export const ProdContext = createContext();

export function ProdContextProvider({ children }) {
  let product;

  useEffect(() => {
    if (localStorage.getItem("currentproduct"))
      product = JSON.parse(localStorage.getItem("currentproduct"));
      
  });

  let isproduct = product ? true : false;
  console.log("isproduct", isproduct);
  const [getpro, setGetPro] = useState(isproduct);
  return (
    <>
      {" "}
      <ProdContext.Provider value={{ getpro, setGetPro }}>
        {children}
      </ProdContext.Provider>
    </>
  );
}
