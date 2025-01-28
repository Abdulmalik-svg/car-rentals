import React from "react";


const Register = () => {
  return (
    <div >
      <div className="plate1">
        <p id="plate2">Sign Up</p>
      
        <input
          type="text"
          name="First name"
          placeholder="First name"
          className='plate3'
        />
        <input
          type="text"
          name="Surname"
          placeholder="Surname"
          className="plate3"
        />
        <input type="text" name="Surname" className="plate3" placeholder="Email Address" />
      
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
