
import React, { useEffect, useState } from "react";
import { auth, provider } from "../auth/config";
import { signInWithPopup } from "firebase/auth";
import axios from 'axios'
const django_url = "http://127.0.0.1:8000"

function Login() {
  const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [profile_uri, setProfile_uri] = useState('')



  const handleClick = () => {

    signInWithPopup(auth, provider).then((data) => {
      console.log(data)
      // setName(data.user.displayName)
      setEmail(data.user.email)
      // setProfile_uri(data.user.photoURL)
      localStorage.setItem("email", data.user.email)

      axios.get(django_url + "/auth", {
        params: {
          u_name: data.user.displayName,
          u_email: data.user.email,
          u_profile_uri: data.user.photoURL
        }
      }).then(response =>{ 
        console.log(response.data)
        localStorage.setItem("favourite_tool", response.data["u_favourite_tool"][0]["u_favourite_tool"])
      }).catch(error => console.log(error))
    })
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }


  useEffect(() => {
    setEmail(localStorage.getItem('email'))
  },[])


  return (
    <>
      <div className="p-5">

      </div>

      <button className="btn btn-info " onClick={handleClick}>Signin With Google</button>
      <div className="mt-3"></div>
      <button className="btn btn-info " onClick={logout}>Logout</button>
      <h3 className="text-light fs-1">{email}</h3>
      {/* <img src={profile_uri}></img> */}
    </>
  )
}

export default Login