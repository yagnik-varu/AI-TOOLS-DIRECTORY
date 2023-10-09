// import React from 'react'
// // import Navbar from '../components/Navbar'
// // import CardFormate from '../components/CardFormate'
// import { Navbar, Container, Image, Card } from 'react-bootstrap';
// import 'C:/collage work/AI-TOOLS-DIRECTORY/frontend/src/App.css';
// function Home() {
//   const software=[
//     {
//       name:"yagnik"
//     }
//   ]
//   return (
//     <>
//     {/* <div className='body'>
//     <div className="background-banner w-100 vh-100 d-flex justify-content-center align-items-center">
//       <div className="content text-center">
//         <h1 className="text-red">AI TOOL</h1>
//       </div>

//     </div>
//     <div>
//       <CardFormate name="photoshop" />

//     </div>

//     </div> */}



// <div className="App">
//       {/* Navbar */}
//       {/* <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="#">Your Logo</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             <a href="#">Home</a>
//           </Navbar.Text>
//           <Navbar.Text>
//             <a href="#">About</a>
//           </Navbar.Text>
//           <Navbar.Text>
//             <a href="#">Services</a>
//           </Navbar.Text>
//           <Navbar.Text>
//             <a href="#">Contact</a>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Navbar> */}

//       {/* Homepage Content */}
//       <div className="body">
//       <Container fluid className="homepage">
//         <div className="centered-text">
//           <h1>Welcome to</h1>
//           <h2>AI Tool Directory</h2>
//         </div>
//         <Image
//           src="https://tse1.mm.bing.net/th?id=OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj&pid=Api&P=0&h=180" // Replace with your image URL
//           alt="Introduction"
//           fluid
//           className="center-image"
//         />

//         {/* Cards */}
//         <Container className="mt-5">
//           <h3>Featured Tools</h3>
//           <div className="card-container">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://placeimg.com/200/200/tech" // Replace with card image URL
//                 alt="Tool 1"
//               />
//               <Card.Body>
//                 <Card.Title>Tool 1</Card.Title>
//                 <Card.Text>
//                   Description of Tool 1 goes here. You can provide more details about each tool in this section.
//                 </Card.Text>
//                 <a href="#" className="btn btn-primary">
//                   Learn More
//                 </a>
//               </Card.Body>
//             </Card>

//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://placeimg.com/200/200/tech" // Replace with card image URL
//                 alt="Tool 2"
//               />
//               <Card.Body>
//                 <Card.Title>Tool 2</Card.Title>
//                 <Card.Text>
//                   Description of Tool 2 goes here.
//                 </Card.Text>
//                 <a href="#" className="btn btn-primary">
//                   Learn More
//                 </a>
//               </Card.Body>
//             </Card>

//             {/* Add more cards as needed */}
//           </div>
//         </Container>
//       </Container>

//       </div>

//     </div>









//     </> 




//   )
// }

// export default Home



import React from 'react'
import img1 from "../img/ai.png"
import ImageTools from '../components/ImageTools'

function Home() {
  return (
    <>
    <div className='home'>
      <div className="centered-text row row align-items-center">
        <div className='col-sm-8'>
          <h1 className='fw-bolder fs-1'>Welcome to AI Tool Directory</h1>
          <p>FIND Your Tool EASILY</p>
          
          </div>
        <div className="col-sm-4 home-image ">
          <img src={img1}/>
       
      </div>

    </div>
    </div >
    <div className='container-fluid latest-content'>
      <h1 > Let's get latest tool</h1>
      <ImageTools/>

    </div>
    </>
    
   
    



   
  )
}

export default Home