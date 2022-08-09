import type { NextPage } from "next";

import verbiage from "../content/CoursesPage.json";

import styles from "../styles/CoursesPage.module.css";

import Menu from "../components/Menu";
import Label from "../components/Label";
import Footer from "../components/Footer";

const { header, body, courses, features, help } = verbiage;

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
      {/* features */}
      <div className={styles.features}>
        {features.map((feature, index) => {
          return (
            <div key={index} className={styles.feature}>
              <img src={feature.img} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>
      {/* help */}
      <div className={styles.help}>
        <h2>Need Help?</h2>
        <h3>{help.title}</h3>
        <p>{help.text}</p>
      </div>
      <Label />
      <Footer />
    </>
  );
};

export default Courses;
