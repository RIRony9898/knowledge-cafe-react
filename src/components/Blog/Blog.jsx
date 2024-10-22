import PropTypes from "prop-types";
import { BsBookmarkPlus } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className='mb-8'>
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
          <button className="ml-2" onClick={() => handleAddToBookmark(blog)}>
            <BsBookmarkPlus />
          </button>
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
      <button className='bg-red-300' onClick={()=>handleMarkAsRead(id, reading_time)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
