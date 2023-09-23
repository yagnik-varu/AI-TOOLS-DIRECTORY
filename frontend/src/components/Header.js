// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import ImageTools from "./ImageTools";
import axios from "axios";


import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function Header() {
  // const [currKey, setCurrKey] = useState("")
  // const [respons, setResponse] = useState(null)
  // const [document, setDocument] = useState("")

  // const nav_key = {
  //   image: ["Image upscaller", "Image Genrators", "Image Editors"],
  //   voice: ["Voice","Voice"],
  //   media: ["Audio", "Design", "Music", "Make presentation"],
  // }

  // function http_tool(e) {
  //   axios.get('http://127.0.0.1:8000/data/', {
  //     params: {
  //       keyFeild: e,
  //       keyDoc: currKey
  //     }
  //   })
  //     .then(response => {
  //       setResponse(response.data);
  //     })
  // }
  // const [colorChange,setColorChange] = useState(false)

  var isLoggedIn = false
  if (localStorage.getItem('email')) { isLoggedIn = true }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);



  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-transperent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AI TOOLS DIRECTORY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>

              <select class="form-select" aria-label="Default select example" onChange={(e) => setCurrKey(e.target.value)}>
                <option selected>select</option>
                <option value="image">image</option>
                <option value="voice">voice</option>
                <option value="media">media</option>
               
              </select>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourite
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  login
                </Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav> */}







      <div >
      <Navbar expand="lg" className={colorChange ? 'header-color-scroll fixed-top' : 'header-color fixed-top'} bg="" data-bs-theme=" ">
        <Container className='container-fluid'>
          <Navbar.Brand>
            <Link to=''>
           <span className="app-logo text-dark"> AI TOOLS DIRECTORY</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="me-7 gap-1.5 lg:gap-5">
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to=""><HomeIcon /> <span>Home</span></NavLink> */}
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plants">home </NavLink> */}
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plantcare"><SpaIcon /> <span>Plant Care</span></NavLink> */}
              <NavDropdown title={"tool"} className='nav-dropdown' id="nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className='navLink' to="image">Image</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className='navLink' to="media">Media</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="login">
                
                {isLoggedIn ? 'LogOut' : 'Login'}
              </NavLink>

              {/* <NavLink className={colorChange?'navLink-scroll':'navLink'} to={plants&page=}><ForestIcon /> <span>Plants</span></NavLink> */}
            </Nav>
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
