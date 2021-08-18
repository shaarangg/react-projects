import React from 'react'
import { RiCloseLine } from 'react-icons/ri';
import { sublinks } from "./data";
import { GlobalContext } from './context';

export default function Sidebar() {
    const { isSidebarOpen, closeSidebar } = GlobalContext();
    return (
        <aside className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSidebar}><RiCloseLine /></button>
                <div className="sidebar-links">
                    {
                        sublinks.map((item, index) => {
                            const { page, links } = item;
                            return (
                                <article key={index}>
                                    <h4>{page}</h4>
                                    <div className="sidebar-sublinks">{links.map((link, index) => {
                                        const { label, url, icon } = link;
                                        return (
                                            <a href={url} key={index}>{icon} {label}</a>
                                        )
                                    })}</div>
                                </article>
                            )
                        })
                    }
                </div>
            </div >

        </aside>
    )
}