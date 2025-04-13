import forgetPasswordImage from '../assets/img/forgetPassword.png';

const RightBox_forgetPassword = () => {
  return (
    <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
      <img 
        src={forgetPasswordImage} 
        alt="Forgot Password Illustration" 
        style={{ 
          maxWidth: '80%',
          height: 'auto'
        }} 
      />
    </div>
  );
};

export default RightBox_forgetPassword;