import { createContext, useState, useRef } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  const [username, setusername] = useState("username");
  const [Selected, setSelected] = useState(undefined);
  const socket = useRef();
  const ContextValue = {
    username,
    setusername,
    socket,
    setSelected,
    Selected,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
