import BlogCard from "./BlogCard";
import blog1 from '../../assets/img/blog1.jpg';
import blog2 from '../../assets/img/blog2.jpg';
import blog3 from '../../assets/img/blog3.jpg';

const Blog = () => {
  const blogPosts = [
    {
      image: blog1,  // Directly passing the imported variable
      date: "March 15, 2024",
      title: "Essential Speech Development Tips",
      description: "Discover effective strategies to support your child's speech development journey.",
    },
    {
      image: blog2,  // Directly passing the imported variable
      date: "March 10, 2024",
      title: "Fun Language Learning Games",
      description: "Engaging activities that make speech therapy practice enjoyable for kids.",
    },
    {
      image: blog3,  // Directly passing the imported variable
      date: "March 5, 2024",
      title: "Parent's Guide to Speech Therapy",
      description: "Everything you need to know about supporting your child through speech therapy.",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-container p-2 m-2">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}  // Passing the correct image
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
