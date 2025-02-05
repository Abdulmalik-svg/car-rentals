import React from 'react'

const Login  = () => {
  return (
    <div className='image-container'>
    <img src="src/assets/bhig.webp" alt=""  id='mouse1' className='h-10'/>
    <div class="text-overlay">"WE DO IT RIGHT THE FIRST TIME"</div>

    <p className="mouse2">CONTACT US</p>
    <div className='map'>
<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />\
</div>
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

