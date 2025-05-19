import logo from '../../assets/img/logo.png';
 import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Kid Therapy Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <h4>{t('footer.quickLinks')}</h4>
          <a href="#home">{t('navbar.home')}</a>
          <a href="#about">{t('navbar.about')}</a>
          <a href="#features">{t('navbar.features')}</a>
          <a href="#reviews">{t('navbar.reviews')}</a>
          <a href="#blog">{t('navbar.blog')}</a>
        </div>
        <div className="footer-contact">
          <h4>{t('footer.contactUs')}</h4>
          <p>{t('footer.email')}: info@kidtherapy.com</p>
          <p>{t('footer.phone')}: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
