import React from 'react'
import { FaBars } from "react-icons/fa";
import { GlobalContext } from './context';
export default function Home() {
    const { openModal, openSidebar } = GlobalContext();
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>show modal</button>
        </main>
    )
}
