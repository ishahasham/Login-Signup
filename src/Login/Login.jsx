import React from "react";

function Login({onSubmit, onToggleForm}){
    return (
        <form onSubmit={onSubmit}>
          <h2 className="form-title">Login </h2>
          <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <button type="submit" className="form-button">
            Login
          </button>
          <div className="form-link">
            Don't have an account? <a href="#" onClick={onToggleForm}>
              Sign up
            </a>
          </div>
        </form>
      );
}
export default Login