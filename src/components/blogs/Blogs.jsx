import React, { useEffect, useState } from "react";
import "./Blogs.css";
import SingleBlog from "../singleBlog/SingleBlog";
import BookMark from "../bookmark/BookMark";
import ReadTimeCount from "../readTimeCount/ReadTimeCount";
import QuestionAnswerBlog from "../questionAnswerBlog/QuestionAnswerBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTimeCount, setReadTimeCount] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleMarkAsRead = (addedBookMark) => {
    let newReadCount = [];
    newReadCount = [...readTimeCount, addedBookMark];
    setReadTimeCount(newReadCount);
  };

  const handleBookMark = (addedBookMark) => {
    let newBookMark = [];
    newBookMark = [...bookMark, addedBookMark];
    setBookMark(newBookMark);
  };

  return (
    <div className="blog-container-wrapper">
      <div className="blog-container">
        <div className="blog-posts">
          {blogs.map((blog, index) => (
            <SingleBlog
              key={index}
              blog={blog}
              handleMarkAsRead={handleMarkAsRead}
              handleBookMark={handleBookMark}
            />
          ))}
        </div>
        <div className="bookmark-views">
          <div className="reading-count">
            <ReadTimeCount readTimeCount={readTimeCount} />
          </div>
          <div className="bookmarked-list">
            <BookMark bookMark={bookMark} />
          </div>
        </div>
      </div>
      <QuestionAnswerBlog />
    </div>
  );
};

export default Blogs;
