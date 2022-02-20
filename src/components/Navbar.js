import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './NavbarData';
import '../scss/Navbar.scss'
import { Button } from '@mui/material';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (


    <nav>
      <div className='nav-center'>
        <div>
        <h2 ><a href="/" className="logo">Polis-x Health</a></h2>	
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <div className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <span key={id}>
                  {text !== "Login" && <a href={url}>{text}</a>}
                  {text === "Login" && <Button href={url} variant="outlined" sx={{ p: 3.5 }}>{text}</Button>}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;