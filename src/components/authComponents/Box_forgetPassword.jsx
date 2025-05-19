import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { useTranslation } from 'react-i18next';
const LeftBox_forgetPassword = () => {
    const { t } = useTranslation();
  return (
    <div className="right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div>
        <div className="featured-image m-2 text-center">
          <img
            className="img img-forget-logo"
            src={logo}
            alt="Logo"
            style={{ width: '350px', position: 'relative', left: '22px' }}
          />
        </div>
        <div className="align-items-center justify-content-center border mx-md-5 mx-2 p-sm-2 p-xl-5">
          <div className="header-text mt-4 mb-4 text-center">
            <p>{t('forgotPassword.title')}</p>
            <p>{t('forgotPassword.subtitle')}</p>
          </div>

          <div className="input-group mb-4 d-flex justify-content-center">
            <input
              className="form-control form-control-lg fs-6 bg-light mx-2"
              type="email"
              placeholder={t('forgotPassword.emailPlaceholder')}
              id="myemail"
              style={{ width: '90%' }}
            />
          </div>

          <div className="input-group mb-4">
            <button
              className="btn btn-primary btn-lg w-100 fs-6 m-2 logo-color"
              style={{ outline: 'none', border: 'none' }}
            >
              {t('forgotPassword.sendRecoveryLink')}
            </button>
          </div>

          <div className="row text-center sup mb-3">
            <small>
              {t('forgotPassword.rememberPassword')}
              <Link to="/Login">{t('forgotPassword.backToLogin')}</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBox_forgetPassword;
