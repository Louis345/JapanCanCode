import type { NextPage } from "next";

import verbiage from "../content/CoursesPage.json";

import styles from "../styles/CoursePage.module.css";

import Menu from "../components/Menu";
import Label from "../components/Label";
import Footer from "../components/Footer";

const { help } = verbiage;

const Courses: NextPage = () => {
  return (
    <>
      {/* header */}
      <div className={styles.header}>
        <Menu />
        <div className={styles.hero}>
          {/* title */}
          <h1>Front-End Web Development</h1>
          {/* hero */}
          <p>
            This 12-week course in Front-End Web Development is structured
            around tutorials, assignments, and individual and group projects to
            give students hands-on practice building the pieces of code that
            determine how an online experience feels, and connect the user
            experience into the data-crunching processes of the back end.
          </p>
        </div>
      </div>
      {/* body */}
      <div className={styles.body}>
        <div>
          <h3>Date:</h3>
          <p>February 14, 2022 - May 4, 2022</p>
          <h3>Venue:</h3>
          <p>Virtual</p>
          <h3>Organizer:</h3>
          <p>KingstonCanCode</p>
          <span>Price: 11850 JPY</span>
        </div>
        <img src="/assets/course-image.png" />
      </div>
      {/* details */}
      <div className={styles.details}>
        <p>
          This 12-week course in Front-End Web Development is structured around
          tutorials, assignments, and individual and group projects to give
          students hands-on practice building the pieces of code that determine
          how an online experience feels, and connect the user experience into
          the data-crunching processes of the back end. Through lecture and
          individual assignments, students will establish solid foundations in
          key tools of front end developers: HTML, CSS, Bootstrap, JavaScript,
          and collaborative workplace/version control tools Git and GitHub.
        </p>
        <p>
          The latter part of the course features team based portfolio-building
          projects for community organizations, giving students real-world
          experience in web design and development.
        </p>
        <p>
          This course may be of particular interest to graphic designers, as it
          teaches the technical skills necessary for UI (user interface)
          development and wire-framing. The course may also be attractive to
          beginning programmers with aspirations to create mobile applications,
          as it establishes foundations in JavaScript that support eventual
          progression into Full-Stack Web Development.
        </p>
        <h3>Course Details</h3>
        <p>
          This course meets two evenings per week, three hours per session on
          Mondays and Wednesdays – 5:45pm – 8:45pm. Occasional labs outside of
          classes will provide further opportunities for mentoring and
          networking. The Spring 2022 classes are scheduled to start the week of
          February 14th.
        </p>
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
