import React, { useState } from "react";
import "./SingleBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, handleMarkAsRead, handleBookMark }) => {
  const [isActive, setIsActive] = useState(true);
  function textShortener(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }
  return (
    <div className="single-blog-post">
      <div className="blog-image-container">
        <img src={blog.blog_image} alt="blog-img" className="blog-image" />
      </div>
      <div className="blog-details">
        <div className="author-info-area">
          <div className="author-image-area">
            <img src={blog.author_image} alt="author-image" />
          </div>
          <div className="author-name-area">
            <p className="author-name">{blog.author}</p>
            <p className="published-date">{blog.published_date}</p>
          </div>
        </div>

        <div className="bookmark-area">
          <div className="minutes-read">
            <p>{blog.read_time} min read</p>
          </div>
          <button
            onClick={() => {
              handleBookMark({ blog });
            }}
            className="bookmark"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <div className="blog-title">
        <h2>{blog.title}</h2>
      </div>
      <div className="blog-body">
        {isActive ? <p>{textShortener(blog.body, 85)}</p> : <p>{blog.body}</p>}
        {isActive ? (
          <button className="btn-show-more" onClick={() => setIsActive(false)}>
            Read more <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        ) : (
          <button className="btn-show-less" onClick={() => setIsActive(true)}>
            Read less <FontAwesomeIcon icon={faArrowCircleLeft} />
          </button>
        )}
      </div>
      <div className="mark-read">
        <button onClick={() => handleMarkAsRead({ blog })}>
          {" "}
          Mark as read <FontAwesomeIcon icon={faArrowCircleRight} />{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
