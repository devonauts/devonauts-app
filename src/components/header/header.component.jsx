import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as LogoText } from '../../assets/logo/devonauts-text.svg';
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import './header.styles.scss';

const Header = (props) => (

 <div className='header ' >
      <Link  to="/" className='logo-container' >
        <Logo className="logo ki-logo" />
        <LogoText className= "logo-text "/>
      </Link> 
    
      <div className="options ">
          {' '}
        <Link className='option ' to="about-us">About us</Link>
        <Link className='option ' to="services">Services</Link>
        <Link className='option ' to="features">Features</Link>
        <Link className='option ' to="technologies">Technologies</Link>
        <Link className='option ' to="careers">Careers</Link>
        <Link className='option ' to="contact-us">Contact us</Link>
      </div>
      <Link className='option' variant='button' >
      <button className='register'>REGISTER</button>
      </Link>
 </div>   
)
export default Header;