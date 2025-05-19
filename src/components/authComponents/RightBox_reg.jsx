import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RightBox_reg = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>{t('auth.signupTitle', 'Sign Up')}</p>
          <p>{t('auth.signupSubtitle', 'Create your account')}</p>
        </div>

        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="text"
            placeholder={t('auth.username', 'Username')}
            id="myusername"
          />
        </div>

        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="email"
            placeholder={t('auth.email', 'Email')}
            id="myemail"
          />
        </div>

        <div className="input-group mb-1 position-relative">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type={showPassword ? "text" : "password"}
            placeholder={t('auth.password', 'Password')}
            id="mypassword"
          />
          <div className="eye" onClick={togglePasswordVisibility}>
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </div>
        </div>

        <div className="input-group mb-4 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label text-secondary rememberMe" htmlFor="terms">
              <small>{t('auth.agreeTerms', 'I agree to the Terms & Conditions')}</small>
            </label>
          </div>
        </div>

        <div className="input-group mb-2">
          <button className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login">
            {t('auth.signupButton', 'Sign Up')}
          </button>
        </div>

        <div className="row text-center sup mb-3">
          <small>
            {t('auth.haveAccount', 'Already have an account?')}{' '}
            <Link to="/login">{t('auth.signinLink', 'SIGN IN')}</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default RightBox_reg;
