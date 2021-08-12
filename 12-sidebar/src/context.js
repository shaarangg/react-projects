import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{ isModalOpen, openModal, closeModal, isSidebarOpen, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
}

export function GlobalContext() {
    return useContext(AppContext);
}