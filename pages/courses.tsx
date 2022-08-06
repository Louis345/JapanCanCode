import type { NextPage } from "next";

import verbiage from "../content/CoursesPage.json";

import styles from "../styles/CoursesPage.module.css";

import Menu from "../components/Menu";

const { header, body, courses } = verbiage;

const Courses: NextPage = () => {
  return (
    <>
      {/* header */}
      <div className={styles.header}>
        <Menu />
        <div className={styles.hero}>
          {/* title */}
          <h1>{header.text}</h1>
          {/* hero */}
          <p>{header.subtext}</p>
        </div>
      </div>
      {/* body */}
      <div className={styles.body}>
        <div>
          <h3>{body.title}</h3>
          <p>{body.text}</p>
        </div>
        <img src={body.image} />
      </div>
      {/* courses */}
      <div className={styles.courses}>
        {courses.map((co) => (
          <div key={co.name} className={styles.course}>
            <img src={co.img} />
            <div>
              <h3>{co.name}</h3>
              <h4>{co.price}</h4>
              <p>{co.description}</p>
              <a href={co.action[1]}>{co.action[0]}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
