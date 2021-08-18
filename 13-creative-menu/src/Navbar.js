import React from 'react'
import { FaBars } from 'react-icons/fa';
import { GlobalContext } from './context'
export default function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = GlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = ((tempBtn.left + tempBtn.right) / 2);
        const bottom = tempBtn.bottom + 5;
        openSubmenu(page, { center, bottom });
    }
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <p className="logo">Shaarang</p>
                    <button className="btn toggle-btn" onClick={openSidebar}><FaBars /></button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                            onMouseLeave={closeSubmenu}
                        >products</button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                            onMouseLeave={closeSubmenu}
                        >developers</button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                            onMouseLeave={closeSubmenu}
                        >company</button>
                    </li>
                </ul>
                <button className="btn signin-btn" onMouseOver={displaySubmenu}>sign in</button>
            </div>
        </nav>
    )
}
