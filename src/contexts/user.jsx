import React, { createContext, useState, useContext } from "react";

// Create a context to hold user information
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// User provider component that will wrap your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information here

  const updateUser = (newUserData) => {
    setUser(newUserData); // Update user data
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
