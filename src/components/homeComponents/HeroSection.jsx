import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation-withoutTxt.json";
import { speakText } from "../../utils/tts";

const HeroSection = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();
  const { t, i18n } = useTranslation();

  const playAnimationAndSpeak = () => {
    lottieRef.current?.play();
    if(i18n.dir() === 'rtl'){
       speakText(("Khush Aamdeed"), () => {
      lottieRef.current?.pause();
    });}
    else{
      
    speakText(("hello"), () => {
      lottieRef.current?.pause();
    });
  }
   
  };

  useEffect(() => {
    playAnimationAndSpeak();
    return () => {
      lottieRef.current?.destroy();
    };
  }, []);

  return (
    <section className="hero-section home1" id="home" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="main-headline animate-text">
          <span className="highlight">{t("hero.title1")}</span><br />
          <span className="fun-playful">{t("hero.title2")}</span>
        </h1>
        <p className="sub-headline animate-text-delay">
          {t("hero.subtitle")}
        </p>

        <div className="cta-container">
          <button 
            className="get-started-btn" 
            onClick={() => navigate('/login')}
            aria-label={t("hero.ctaLabel")}
          >
           {t("hero.cta")} <span className="btn-icon" aria-hidden="true">
  {i18n.dir() === 'rtl' ? '←' : '→'}
</span>
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="container text-center">
          <div className="row justify-content-center">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop
              autoplay={false}
              onClick={playAnimationAndSpeak}
              onKeyDown={(e) => e.key === 'Enter' && playAnimationAndSpeak()}
              className="lottie-animation"
              role="button"
              tabIndex="0"
              aria-label={t("hero.animationAria")}
              style={{ 
                cursor: "pointer", 
                maxWidth: "300px",
                width: "100%",
                margin: "0 auto"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
