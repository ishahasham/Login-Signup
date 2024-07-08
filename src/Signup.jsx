import React from "react";

function Signup({onSubmit, onToggleForm}){
    return(
        <form onSubmit={onSubmit}>
            <h2 className="form-title">Sign Up</h2>
            <input type="text"  placeholder="Name"  className="form-input"/>
            <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <button type="submit" className="form-button">
            Sign Up
          </button>
          <div className="form-link">
            Already have an Account? <a href="#" onClick={onToggleForm}> 
                Login
            </a>
          </div>
        </form>
    )
}
export default Signup