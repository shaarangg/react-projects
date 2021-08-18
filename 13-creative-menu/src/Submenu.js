import React, { useRef, useEffect, useState } from 'react'
import { GlobalContext } from './context'
export default function Submenu() {
    const { isSubmenuOpen, location, page: { page, links } } = GlobalContext();
    const container = useRef(null);
    const [columns, setColumns] = useState('');
    useEffect(() => {
        setColumns('col-2')
        if (links.length === 3) {
            setColumns('col-3')
        }
        if (links.length > 3) {
            setColumns('col-4');
        }
        const { center, bottom } = location;
        const submenu = container.current;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`
    }, [location, links])
    return (
        <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links.map((link, index) => {
                    const { label, icon, url } = link
                    return (
                        <a href={url} key={index}>{icon} {label}</a>
                    )
                })}
            </div>
        </aside>
    )
}
