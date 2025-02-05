import React from 'react'
import Shadows from "../assets/Shadows.mp4"
const Home = () => {
  return (
   <div>
      <div className="main">
        <video src={Shadows} autoPlay loop muted/>
        
      </div>
      <div className='cat5'>
         <div className="cat2">
        <img src="src/assets/carpet (4).jpg" alt="" id='cat3'/>
        <p className='cat4'>Carpet Cleaning</p>
      </div>
      <div className="caat2">
        <img src="public/curtains.jpg" alt="" id='caat3'/>
        <p className='caat4'>Curtains cleaing</p>
      </div>
      <div className="caat2">
        <img src="public/mega.jpg" alt="" id='caat3'/>
        <p className='caat4'>Dry cleaing</p>
      </div>
      <div className="cat2">
        <img src="public/exterior.jpg" alt="" id='cat3'/>
        <p className='ict4'>Exterior Cushion Cleaning</p>
      </div>
      <div className="caat2">
        <img src="public/laundry.jpg" alt="" id='caat3'/>
        <p className='caat4'>Laundry</p>
      </div>
      <div className="caat2">
        <img src="public/linen.jpg" alt="" id='caat3'/>
        <p className='caat4'>Linen and sheets</p>
      </div>
      <div className="cat2">
        <img src="public/marble.jpg" alt="" id='cat3'/>
        <p className='ict4'>Marble Cleaning and Polishing</p>
      </div>
      <div className="caat2">
        <img src="public/matrass.jpg" alt="" id='caat3'/>
        <p className='caat4'>Mattress cleaing</p>
      </div>
      <div className="caat2">
        <img src="src/assets/roof (1).webp" alt="" id='caat3'/>
        <p className='caat4'>Overhead Cleaning</p>
      </div>
      </div>

      <div className='landpage'>
        <h1 className="">Welcome to Sonic Yacht Care</h1>
        <p className='land1'>Icon Yacht Care provides specialty yacht interior cleaning services including dry cleaning, laundry, carpet and upholstery, marble polishing and much more. We also provide new flooring installations (carpet, wood, marble) as well as fabrication of canvas and upholstery.
           We service all of south Florida including Fort Lauderdale, Miami, and West Palm Beach. 
           With over 20 years of experience in the marine industry, our only goal is to provide the best yacht service and results.</p>
        <p>Contact us today to assist with all of your yacht care needs.</p>
        <p>Call 954-654-1615</p>
        <p>“We do it right the first time”</p>
      </div>

   </div>
  
  )
}

export default Home

