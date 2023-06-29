import React from 'react';
import logo from './image/SampleLogo.png'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <a to="/" className='navlink'>
      <div style={styles.navbarLeft}>
        <img src={logo} alt="Academate Logo" style={styles.logo} />
        <span style={styles.name}>Academate</span>
      </div>
      </a>
      <a to={'/'} className='navlink'>
        <div style={styles.navbarRight}>
          <i className="fas fa-user"></i>
          <span style={styles.dashboard}>Dashboard</span>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 13px 10px 40px',
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  navbarRight: {
    marginRight: '10px',
  },
  dashboard: {
    fontWeight: 'bold',
    fontSize: '15px',
    marginLeft: '10px'
  },
};