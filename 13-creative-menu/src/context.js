import React, { useContext, useState } from 'react';
import { sublinks } from '././data';
const ContextAPI = React.createContext();
export function AppProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    return (
        <ContextAPI.Provider
            value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location, page }}
        >{children}</ContextAPI.Provider>
    )
}
export function GlobalContext() {
    return useContext(ContextAPI);
}