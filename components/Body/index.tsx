import type { NextPage } from "next";

import Courses from "../Courses";
import Posts from "../Posts";
import Reviews from "../Reviews";
import Staff from "../Staff";
import Label from "../Label";

const Body: NextPage = () => {
  return (
    <div>
      {/* courses title */}
      <h2 style={{ fontSize: 72, textAlign: "center", margin: "30px 0" }}>
        Our Courses
      </h2>
      <Courses />
      <Posts />
      {/* reviews title */}
      <h2
        style={{
          fontSize: 60,
          fontWeight: "bold",
          width: "50%",
          textAlign: "center",
          margin: "80px auto 20px",
        }}
      >
        Trusted by Thousands of Happy Students
      </h2>
      <p
        style={{
          fontSize: 25,
          width: "45%",
          textAlign: "center",
          margin: "0 auto 20px",
        }}
      >
        These are the stories of our customers who have joined us with great
        pleasure when learning with JapanCanCode.
      </p>
      <Reviews />
      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: "50px 0",
        }}
      >
        {/* staff title */}
        <h2 style={{ fontSize: 70, textAlign: "center", margin: "30px 0" }}>
          Our <span style={{ color: "red" }}>Tokyo</span> Staff
        </h2>
        <Staff />
      </div>
      {/* label */}
      <Label />
      <img
        src="/assets/social.png"
        style={{
          display: "block",
          width: "90%",
          borderBottom: "1px solid purple",
          margin: "100px auto",
        }}
      />
    </div>
  );
};

export default Body;
