import PropTypes from 'prop-types';
const BlogCard = ({ image, date, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <span className="blog-date">{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="read-more">Read More →</a>
      </div>
    </div>
  );
};

export default BlogCard;
BlogCard.propTypes = {
    image: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };