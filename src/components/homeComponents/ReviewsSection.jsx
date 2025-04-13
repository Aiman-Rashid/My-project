const ReviewsSection = () => {
    const reviews = [
      { stars: '⭐⭐⭐⭐⭐', text: 'Amazing improvement in my child\'s speech development!', reviewer: '- Sarah M.' },
      { stars: '⭐⭐⭐⭐⭐', text: 'The interactive exercises make therapy fun and engaging.', reviewer: '- John D.' },
    ];
  
    return (
      <section id="reviews" className="reviews-section">
        <h2>What Parents Say</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">{review.stars}</div>
              <p>{review.text}</p>
              <span className="reviewer">{review.reviewer}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ReviewsSection;
  