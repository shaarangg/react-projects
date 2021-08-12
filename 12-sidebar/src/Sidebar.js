import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { socials, links } from './data';
import { GlobalContext } from './context';

export default function Sidebar() {
    const { isSidebarOpen, closeSidebar } = GlobalContext();
    return (
        <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
            <div className="sidebar-header">
                <p className="logo">Shaarang</p>
                <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {socials.map((social) => {
                    const { id, icon, url } = social;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}