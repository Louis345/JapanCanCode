import type { NextPage } from "next";

import verbiage from "../content/CoursesPage.json";

import styles from "../styles/CoursesPage.module.css";

import Menu from "../components/Menu";

const { header, body } = verbiage;

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
    </>
  );
};

export default Courses;
