
import React, { useEffect, useState } from "react";
import {auth,provider} from "../auth/config";
import {signInWithPopup} from "firebase/auth";

function Login() {
  const [value,setValue] = useState('')

    const handleClick= () =>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    const  logout =()=>{
      localStorage.clear()
      window.location.reload()
  }


    useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })


  return (
    <>
    <div className="p-5">

    </div>

    <button  onClick={handleClick}>Signin With Google</button>
     <button onClick={ logout}>Logout</button>
     <h3>{value}</h3>
     </>
  )
}

export default Login