import LeftBox from '../components/authComponents/LeftBox';
import RightBox_reg from '../components/authComponents/RightBox_reg';
const Reg = () => {
  return (
    <section className="vh-100 overflow-hidden">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row p-2 box-area">
          <LeftBox />
          <RightBox_reg />
        </div>
      </div>
    </section>
  );
};

export default Reg;
