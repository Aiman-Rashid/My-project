import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Kid Therapy Logo" className="footer-logo-img" />
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@kidtherapy.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kid Therapy. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  