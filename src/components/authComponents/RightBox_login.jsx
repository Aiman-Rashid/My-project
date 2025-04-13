import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RightBox_login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/selectProblem');
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>Sign In</p>
          <p>We are happy to have you back.</p>
        </div>

        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="email"
            placeholder="Email"
            id="myemail"
          />
        </div>

        <div className="input-group mb-1">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="mypassword"
          />
          <span className="eye" onClick={togglePasswordVisibility}>
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </div>

        <div className="input-group mb-4 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label text-secondary rememberMe" htmlFor="rememberMe">
              <small>Remember me</small>
            </label>
          </div>
          <div className="forget">
            <small><Link to="/forgetPassword">Forgot password?</Link></small>
          </div>
        </div>

        <div className="input-group mb-2 ">
          <button 
            className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        <div className="row text-center sup mb-3">
          <small>Don&apos;t have an account? <Link to="/register">SIGN UP</Link></small>
        </div>
      </div>
    </div>
  );
};

export default RightBox_login;