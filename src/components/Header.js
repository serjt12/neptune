import React, { Component } from 'react';
import { Link} from "react-router-dom"
import { Navbar, NavItem } from 'react-materialize'
import './header.css'
class Header extends Component {

  render() {
    return (
      <Navbar brand='logo' right className='navbar-css'>
        <div className='link-container'>
          <Link to="/about">Quienes Somos</Link>
          <Link to="/services">Nuestros servicios</Link>
        </div>
      </Navbar>
    );
  }

}

export default Header;
