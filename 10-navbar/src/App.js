import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data'


function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (showLinks) {
      const linkHeight = linksRef.current.getBoundingClientRect().height;
      linkContainerRef.current.style.height = `${linkHeight}px`;
    }
    else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [showLinks])

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <p className="logo">Shaarang</p>
        <button className="nav-toggle" onClick={() => { setShowLinks(!showLinks) }}><FaBars /></button>
      </div>
      <div className="link-container" ref={linkContainerRef}>
        <ul className="links" ref={linksRef}>
          {
            links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <ul className="social-icons">
        {
          social.map((socialIcons) => {
            const { id, url, icon } = socialIcons
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default App;
