import { useTranslation } from 'react-i18next';
import BlogCard from "./BlogCard";
import blog1 from '../../assets/img/blog1.jpg';
import blog2 from '../../assets/img/blog2.jpg';
import blog3 from '../../assets/img/blog3.jpg';

const Blog = () => {
  const { t } = useTranslation();
  const posts = t('blogSection.posts', { returnObjects: true });
  const title = t('blogSection.title');

  // Static image mapping (order-sensitive)
  const images = [blog1, blog2, blog3];

  return (
    <section id="blog" className="blog-section">
      <h2>{title}</h2>
      <div className="blog-container p-2 m-2">
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            image={images[index]} // Match image to post index
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
