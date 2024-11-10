import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='rounded-lg w-full mb-6 mt-3' src={cover} alt="" />

            <div className='flex justify-between items-center mb-5'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <img className='w-10 h-10 object-cover rounded-full' src={author_img} alt="" />

                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-gray-500'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-200"><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h1 className='text-4xl font-bold'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(id, reading_time)}
                className="text-purple-800 font-bold underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;