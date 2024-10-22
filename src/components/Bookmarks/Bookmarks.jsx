import PropTypes from "prop-types";
// import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <h3>Spent time on read: {readingTime}</h3>

      <h3 className="text-3xl">Bookmarks: {bookmarks.length}</h3>
      {/* {
        bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}/>)
      } */}
      {bookmarks.map((bookmark, idx) => (
        <div key={idx}>
          <h4>{bookmark.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
