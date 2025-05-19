import { useTranslation } from 'react-i18next';

const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = t('reviewsSection.reviews', { returnObjects: true });

  return (
    <section id="reviews" className="reviews-section">
      <h2>{t('reviewsSection.title')}</h2>
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
