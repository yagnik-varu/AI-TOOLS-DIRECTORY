import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageTools from "./ImageTools";
import axios from "axios";

function Header() {
  const [currKey, setCurrKey] = useState("")
  const [respons, setResponse] = useState(null)
  const [document, setDocument] = useState("")

  const nav_key = {
    image: ["Image upscaller", "Image Genrators", "Image Editors"],
    voice: ["Voice","Voice"],
    media: ["Audio", "Design", "Music", "Make presentation"],
  }

  function http_tool(e) {
    axios.get('http://127.0.0.1:8000/data/', {
      params: {
        keyFeild: e,
        keyDoc: currKey
      }
    })
      .then(response => {
        setResponse(response.data);
      })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transperent">
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
                {/* <option value="coding_key">coding</option>
                <option value="chatbots_key">chatbots</option> */}
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
            {/* <Link to=''>Home</Link>
      <Link to='tools'>tool</Link>
      <Link to='favourite'>favourite</Link> */}
          </div>
        </div>
      </nav>
      { 
      // console.log(respons)
        respons && <ImageTools data={respons} />
      }
      <div>
        {
          currKey && (<>
           
              {
                currKey && nav_key[currKey].map((e) => (
                  <button onClick={() => http_tool(e)}>{e}</button>
                ))
              }
            
          </>)
        }
      </div>
    </>
  );
}

export default Header;
