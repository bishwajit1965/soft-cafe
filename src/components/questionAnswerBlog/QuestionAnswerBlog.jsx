import React from "react";
import "./QuestionAnswerBlog.css";

const QuestionAnswerBlog = () => {
  return (
    <div className="question-answer-blog">
      <hr className="blog-divider" />
      <h1>Soft Cafe Blog</h1>
      <article className="question-answer">
        <h3 className="question-style">Question: 1. Props versus state.</h3>
        <h3>Answer: </h3>
        <p>
          Props is the shortened form of property in React Js. Props are
          generally passed down from parent component to child component. Props
          are immutable. Props values can not be changed. But this readonly
          props are used in creating dynamic components. On the other hand
          states are the data that are managed internally and state data can be
          updated by the components. Props are unidirectional from parent to
          child component but states are component specific. In short props
          mange data flow and states are managed within the components in which
          those are used.
        </p>
      </article>
      <article className="question-answer">
        <h3 className="question-style">
          Question: 2. How does useState() work ?
        </h3>
        <h3>Answer: </h3>
        <p>
          Actually useState() is a react hook which enables functional
          components in React in holding state and allows them to be more
          dynamic and interactive. By defining state variables with the
          useState() hook, programmers can create components that respond to
          user input and update themselves in real time whenever needed.
        </p>
      </article>
      <article className="question-answer">
        <h3 className="question-style">
          Question: 3. Purpose of useEffect() other than fetching data ?
        </h3>
        <h3>Answer: </h3>
        <p>
          In React useEffect Hook allows programmers to perform side effects in
          their components. Some examples of side effects are:
          <ol>
            <li>Fetching data</li>
            <li>Directly updating the DOM</li>
            <li>Updating timers</li>
            <li>Reading data from local storage</li>
          </ol>
          React useEffect hook accepts two arguments , for example (count,
          setCount). The second argument is optional in useEffect hook.
          UseEffect runs on every render for example when count changes it
          re-renders. As dependency an empty array is used to prevent
          unnecessary re-renders. In some cases useEffect needs to clean up for
          preventing unnecessary memory leak.
        </p>
      </article>
      <article className="question-answer">
        <h3 className="question-style">
          Question: 4. How does React Js work ?
        </h3>
        <h3>Answer: </h3>
        <p>
          React is a Javascript based User Interface development library. React
          components are independent and reusable bits of code. They serve the
          same purpose as JavaScript functions do, but work in isolation and
          return HTML at the end. Components come in two types, Class components
          and Function components. Nowadays functional components are mostly
          used other than class component. React Js sets the build environment
          into development for Node and Babel and ensures the environment
          variables are reads for the build process. Verifies the packages
          installed in react project are not outdated. It also checks whether
          the code is in TypeScript or not.
        </p>
      </article>
    </div>
  );
};

export default QuestionAnswerBlog;
