import FeatureCard from './FeatureAndAboutCard';

const About = () => {
  const features = [
    { icon: '🧩', title: 'Child-Focused Approach', description: 'Personalized therapy plans tailored to each child\'s needs' },
    { icon: '🎮', title: 'Interactive Learning', description: 'Engaging games and activities that make therapy enjoyable' },
    { icon: '📈', title: 'Track Progress', description: 'Monitor your child\'s development with detailed progress reports' },
  ];

  return (
    <section id="about" className="features-section">
      <h2>Why Choose Us ?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default About;
