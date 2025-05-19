import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureAndAboutCard';

const About = () => {
  const { t } = useTranslation();

  const features = t('about.features', { returnObjects: true });

  return (
    <section id="about" className="features-section">
      <h2>{t('about.title')}</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default About;
