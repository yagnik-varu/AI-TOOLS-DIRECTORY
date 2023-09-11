import React from 'react'
import Navbar from '../components/Navbar'
import CardFormate from '../components/CardFormate'
function Home() {
  const software=[
    {
      name:"yagnik"
    }
  ]
  return (
    <>
    <div className='body'>
    <div className="background-banner w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="content text-center">
        <h1 className="text-red">AI TOOL</h1>
      </div>
    
    </div>
    <div>
      <CardFormate name="photoshop" />

    </div>

    </div>
    
    
    




    
    </> 

    
    

  )
}

export default Home