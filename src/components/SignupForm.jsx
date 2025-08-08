import React from 'react';

const SignupForm = () => {
  return (
    <div className="signup-container"> 
      <div className="signup-form-container">
        <h2 className="signup-form-title">
          Let's get started<br />
          with a few simple steps
        </h2>
        
        <form className="signup-form">
          <div className="form-group">
            <label className="signup-label">Email</label>
            <input 
              type="email" 
              className="signup-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="signup-label">FullName</label>
            <input 
              type="text" 
              className="signup-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label className="signup-label">Password</label>
            <input 
              type="password" 
              className="signup-input"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        <p className="signup-terms">
          By signing up, you agree to our <a href="#" className="signup-link">Terms of Service</a>
        </p>
        <p className="login-link">
          Already have an account? <a href="#" className="signup-link">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;