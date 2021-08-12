import React, { useContext, useState } from 'react';

const ContextAPI = React.createContext();
export function AppProvider({ children }) {
    return (
        <ContextAPI.Provider value="hello">{children}</ContextAPI.Provider>
    )
}
export function GlobalContext() {
    return useContext(ContextAPI);
}