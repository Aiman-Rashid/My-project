import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuestionCircle } from "react-icons/fa";
import '../styles/Articulation.css';
import faqs from "../data/Arti_FAQ.jsx";  // ✅ fixed here

const ArticulationIntro = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="container container-ArticulationDisorderIntro py-5">
      <h1 className="display-4 text-primary mb-4 text-center ArticulationIntroHeading">
        Learn More About Articulation Disorder
      </h1>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <h2 className="h4 text-secondary mb-0 mx-2">FAQ</h2>
          <FaQuestionCircle size={24} />
        </div>

        {faqs.map((faq, index) => (
          <div className="card shadow-sm mb-3" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">{faq.question}</h5>
                <button 
                  className="btn btn-outline-primary btn-sm" 
                  onClick={() => toggleQuestion(index)}
                >
                  {openQuestion === index ? "Hide Answer" : "Show Answer"}
                </button>
              </div>
              {openQuestion === index && <div className="mt-3">{faq.answer}</div>}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArticulationIntro;
