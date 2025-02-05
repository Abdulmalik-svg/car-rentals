import React from 'react'

const Login  = () => {
  return (
    <div className='image-container'>
    <img src="public/premium_photo-1680831748191-d726a2f7b201.avif" alt=""  id='mouse1'/>
    <div class="text-overlay">"WE DO IT RIGHT THE FIRST TIME"</div>

    <p className="mouse2">CONTACT US</p>

    <p className='mouse3'> <b>Main Plant:</b><br />
1612 SW 3rd Ave, <br />
Fort Lauderdale, FL 33315</p>

    <p className="mouse4">Call Now: <b>+234-9039-568-953</b></p>
           
    <p className="mouse5">Monday – Friday       8AM–7PM<br />
                          Saturday     8AM–5PM<br />
Sunday                          Closed</p>

     <input type="text" placeholder='Full Name' className="mouse6" /> <br />
     <input type="text" placeholder='Phone Number' className="mouse6" /> <br />
     <input type="text" placeholder='Email Address' className="mouse6" /> <br />
     <input type="text" placeholder='Message' id='ray'/><br>
     </br>
     <button id='mouse7'>Send Message</button>







    </div>
  )
}

export default Login

