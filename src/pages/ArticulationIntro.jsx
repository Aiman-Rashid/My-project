import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuestionCircle } from "react-icons/fa";
import '../styles/Articulation.css';
import { faqs, urduFaq } from "../data/Arti_FAQ.jsx";
import { useTranslation } from "react-i18next"; // ✅ import i18n hook

const ArticulationIntro = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { i18n } = useTranslation(); // ✅ get current language
  const language = i18n.language;
  const isUrdu = language === "ur";
  const displayedFaqs = isUrdu ? urduFaq : faqs;

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="container container-ArticulationDisorderIntro py-5 m-2">
      <h1 className={`display-4 mb-4 text-center ArticulationIntroHeading ${isUrdu ? "text-success" : "text-primary"}`}>
        {isUrdu ? " تلفظ کی خرابی (آرٹیکولیشن ڈس آرڈر) کے بارے میں مزید جانیں" : "Learn More About Articulation Disorder"}
      </h1>

      <section className="mb-5" dir={isUrdu ? "rtl" : "ltr"}>
        <div className={`d-flex align-items-center m-3 ${isUrdu ? "justify-content-start" : ""}`}>
          <h2 className="h4 text-secondary mb-0 mx-2 ">
            {isUrdu ? "عام سوالات": "FAQ"}
          </h2>
        <FaQuestionCircle 
  size={24} 
  style={{ transform: isUrdu ? "scaleX(-1)" : "none" }} 
/>
        </div>

        {displayedFaqs.map((faq, index) => (
          <div className="card shadow-sm m-3 p-3" key={index}>
            <div className="card-body">
              <div className={`d-flex justify-content-between align-items-center `}>
                <h5 className="card-title mb-0">{faq.question}</h5>
                <button 
                  className="btn btn-outline-primary btn-sm" 
                  onClick={() => toggleQuestion(index)}
                >
                  {openQuestion === index
                    ? (isUrdu ? "جواب چھپائیں" : "Hide Answer")
                    : (isUrdu ? "جواب دکھائیں" : "Show Answer")}
                </button>
              </div>
              {openQuestion === index && (
                <div className="mt-3" style={{ textAlign: isUrdu ? "right" : "left" }}>
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArticulationIntro;
