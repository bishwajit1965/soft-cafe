import React from "react";
import "./BookMark.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookMark = ({ bookMark }) => {
  const notify = () => toast("Blog has already been bookmarked!");
  let blogTitle = "";
  const bookMarkList = [];
  for (const bookmark of bookMark) {
    blogTitle = bookmark.blog.title;
    const matchFound = bookMarkList.find(
      (element) => element == bookmark.blog.title
    );
    if (matchFound) {
      notify();
    } else {
      bookMarkList.push(blogTitle);
    }
  }

  return (
    <div>
      <h3>Bookmarked Blog Posts: {bookMarkList.length} </h3>
      {bookMarkList.map((bookMarkedData, index) => (
        <p className="bookmarked-title-list">
          {index + 1}
          {")"} &nbsp;
          {bookMarkedData}
        </p>
      ))}
    </div>
  );
};

export default BookMark;
