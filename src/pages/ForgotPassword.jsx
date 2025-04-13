import "../styles/Auth.css"; 

import Box_forgetPassword from '../components/authComponents/Box_forgetPassword';


const ForgetPassword = () => {
  

  return (
    <section className="vh-100 overflow-hidden">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row p-2 box-area">
          <Box_forgetPassword />
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword; 