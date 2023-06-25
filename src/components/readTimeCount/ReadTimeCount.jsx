import React from "react";
import "./ReadTimeCount.css";

const ReadTimeCount = ({ readTimeCount }) => {
  console.log(readTimeCount);
  let readTime = 0;
  for (const time of readTimeCount) {
    readTime = readTime + time.blog.read_time;
  }
  return (
    <div>
      <h3>Reading Time : {readTime} min</h3>
    </div>
  );
};

export default ReadTimeCount;
