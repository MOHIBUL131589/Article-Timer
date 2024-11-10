import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-2">
            <div className="bg-slate-400 p-4 m-4 rounded-lg">
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h4 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h4>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    readingTime: PropTypes.number,
    bookmarks: PropTypes.array
}
export default Bookmarks;