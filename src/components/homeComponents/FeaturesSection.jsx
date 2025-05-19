import { useTranslation } from 'react-i18next';
import FeatureCard from "./FeatureAndAboutCard";

const FeaturesSection = () => {
  const { t } = useTranslation();
  const featuresList = t('featuresSection.features', { returnObjects: true });

  return (
    <section id="features" className="features-section">
      <h2>{t('featuresSection.title')}</h2>
      <div className="features-container">
        {featuresList.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
