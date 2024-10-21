import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt={`Cover picture of title: ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{`${reading_time} min read`}</span>
        </div>
      </div>
      <h3 className="text-3xl">{title}</h3>
      <div>
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href=""> #{hashtag}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
