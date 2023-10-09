// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ImageTools from "./ImageTools";
// import axios from "axios";


import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function Header() {
  

  var isLoggedIn = false
  if (localStorage.getItem('email')) {
     isLoggedIn = true 
    console.log(localStorage.getItem('email'))}

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);



  return (
    <>
      







      <div className=" container">
      <Navbar expand="lg" className={colorChange ? 'header-color-scroll fixed-top justify-content-between' : 'header-color fixed-top justify-content-between'}  data-bs-theme=" ">
        <Container className='container-fluid '>
          <Navbar.Brand>
            <Link to='' className="text-decoration-none">
           <span className=" text-info app-logo" > AI TOOLS DIRECTORY</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="mr-5 justify-content-around" id="basic-navbar-nav">
            <Nav className="me-7 gap-1.5 lg:gap-5 ">
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to=""><span>Home</span></NavLink> */}
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plants">home </NavLink> */}
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plantcare"><SpaIcon /> <span>Plant Care</span></NavLink> */}
              <NavDropdown title={"Tool"} className='nav-dropdown' id="nav-dropdown" >
                <NavDropdown.Item>
                  <NavLink className='navLink text-decoration-none text-black' to="image">Image</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className='navLink text-decoration-none text-black' to="media">Media</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className='navLink text-decoration-none text-black' to="coding">Coding</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className='navLink text-decoration-none text-black' to="chatbot">Chatbots</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavLink className={colorChange ? 'navLink-scroll text-decoration-none text-light' : 'navLink text-decoration-none text-light '} to="login">
                
                {isLoggedIn ? 'LogOut' : 'Login'}
              </NavLink> */}

              {/* <NavLink className={colorChange?'navLink-scroll':'navLink'} to={plants&page=}><ForestIcon /> <span>Plants</span></NavLink> */}
            </Nav>
            <NavLink className={colorChange ? 'navLink-scroll text-decoration-none text-warning' : 'navLink text-decoration-none text-warning '} to="login">
                
                {isLoggedIn ? 'LogOut' : 'Login'}
              </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <div>

        {
          currKey && (<>
           
              {
                currKey && nav_key[currKey].map((e) => (
                  <button onClick={() => http_tool(e)}>{e}</button>
                ))
              }
            
          </>)
        }
        { 
      // console.log(respons)
        respons && <ImageTools data={respons} />
      }
      </div> */}
    </>
  );
}

export default Header;
