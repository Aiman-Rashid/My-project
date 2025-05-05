import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    if (passwords.newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    // Add your password reset logic here
    console.log('Password reset successful');
  };

  return (
    <div className="right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div>
        <div className="featured-image m-2 text-center">
          <img 
            className="img img-forget-logo" 
            src={logo} 
            alt="Logo" 
            style={{ width: '350px', position: 'relative', left: '22px'}} 
          />
        </div>
        <div className="align-items-center justify-content-center border mx-md-5 mx-2 p-sm-2 p-xl-5">
          <div className="header-text mt-4 mb-4 text-center">
            <p>Reset Your Password</p>
            <p>Enter your new password below</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4 d-flex justify-content-center position-relative">
              <input
                className="form-control form-control-lg fs-6 bg-light mx-2"
                type={showPassword.newPassword ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                style={{ width: '90%' }}
              />
              <span className="eye" onClick={() => togglePasswordVisibility('newPassword')}>
                <i className={`fa-solid ${showPassword.newPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </span>
            </div>

            <div className="input-group mb-4 d-flex justify-content-center position-relative">
              <input
                className="form-control form-control-lg fs-6 bg-light mx-2"
                type={showPassword.confirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                style={{ width: '90%' }}
              />
              <span className="eye" onClick={() => togglePasswordVisibility('confirmPassword')}>
                <i className={`fa-solid ${showPassword.confirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </span>
            </div>

            {error && (
              <div className="text-danger text-center mb-3">
                {error}
              </div>
            )}

            <div className="input-group mb-4">
              <button 
                type="submit"
                className="btn btn-primary btn-lg w-100 fs-6 m-2 logo-color"
                style={{outline: 'none', border: 'none'}}
              >
                Reset Password
              </button>
            </div>
          </form>

          <div className="row text-center sup mb-3">
            <small>Remember your password? <Link to="/login">Back to Login</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword; 