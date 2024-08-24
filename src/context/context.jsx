import React, { createContext, useReducer } from "react";
import "../styles/Context.css";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
