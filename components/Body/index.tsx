import type { NextPage } from "next";

import Courses from "../Courses";
import Posts from "../Posts";

const Body: NextPage = () => {
  return (
    <div>
      {/* title */}
      <h2 style={{ fontSize: 72, textAlign: "center", margin: "30px 0" }}>
        Our Courses
      </h2>
      <Courses />
      <Posts />
    </div>
  );
};

export default Body;
