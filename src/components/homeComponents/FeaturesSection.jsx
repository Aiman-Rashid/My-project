import FeatureCard from "./FeatureAndAboutCard";

const FeaturesSection = () => {
  const featuresList = [
    { icon: "🎯", title: "Speech Exercises", description: "Interactive exercises designed by speech therapy experts" },
    { icon: "📚", title: "Tutorial Videos", description: "Step-by-step tutorials to improve speech" },
    { icon: "📊", title: "Progress Tracking", description: "Monitor improvement with detailed analytics" },
  ];

  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <div className="features-container">
        {featuresList.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
