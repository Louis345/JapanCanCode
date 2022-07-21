import type { NextPage } from "next";

import Courses from "../Courses";

const Body: NextPage = () => {
  return (
    <div>
      {/* title */}
      <h2 style={{ fontSize: 72, textAlign: "center", margin: "30px 0" }}>
        Our Courses
      </h2>
      <Courses />
    </div>
  );
};

export default Body;
