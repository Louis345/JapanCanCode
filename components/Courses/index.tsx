import type { NextPage } from "next";

import styles from "../../styles/Courses.module.css";

import verbiage from "../../content/HomePage.json";

const { courses } = verbiage;

type COURSE = {
  img: string;
  name: string;
  features: string[];
  content: string;
  action: string[];
};

const Course = ({ course }: { course: COURSE }) => {
  return (
    <div className={styles.course}>
      <img src={course.img} />
      <div className={styles.frame}>
        <h2>{course.name}</h2>
        <ul>
          {course.features.map((feature, index) => {
            return (
              <li key={`feature-${index}`}>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <p>{course.content}</p>
        <a href={course.action[1]}>{course.action[0]}</a>
      </div>
    </div>
  );
};

const Courses: NextPage = () => {
  return (
    <div className={styles.courses}>
      {courses.map((data, index) => {
        return <Course key={`course-${index}`} course={data} />;
      })}
    </div>
  );
};

export default Courses;
