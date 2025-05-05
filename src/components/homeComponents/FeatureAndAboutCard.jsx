import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// PropTypes validation
FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired, // Validate that icon is a node (e.g., JSX element)
  title: PropTypes.string.isRequired, // Validate that title is a string
  description: PropTypes.string.isRequired, // Validate that description is a string
};

export default FeatureCard;
