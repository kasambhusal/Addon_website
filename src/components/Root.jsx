import React, { useEffect, useState } from 'react';
import logoimg from '/addon-logo.png';
import { NavLink, Outlet, Link } from 'react-router-dom';


export default function root() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className='root'>
      <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} >

        <Link to='/'>

          <img style={{ height: '60px', width: '60px' }} src={logoimg} alt="logo" />

        </Link>
        <div style={{ width: '50vw', display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#bfbebb', padding: '4px 30px', borderRadius: '30px', boxShadow: '0px 0px 15px ', zIndex: '2' }}>
            <NavLink className='navLink' to='/departments'>Departments</NavLink>
            <NavLink className='navLink' to='/pricing'>Pricing</NavLink>
          </div>
        </div>


      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
