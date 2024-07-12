import { useState } from 'react'
import './App.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'

function App() {
  let [loginForm, setLoginForm]=useState(true);
  const toggleForm = () => {
    setLoginForm(!loginForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
    <div className="form-card">
      {loginForm ? (
        <Login onSubmit={handleFormSubmit} onToggleForm={toggleForm} />
      ) : (
        <Signup onSubmit={handleFormSubmit} onToggleForm={toggleForm} />
      )}
    </div>
  </div>
  )
}

export default App
