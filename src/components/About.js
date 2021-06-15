import { Link } from "react-router-dom";

const About = () => {
  return (
    <h4>
      <p>
        A simple task tracker project made from the{" "}
        <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
          ReactJS Crash Course 2021 video on YouTube by Traversy Media
        </a>
        .
      </p>
      <Link to="/">Go Back</Link>
    </h4>
  );
};

export default About;
