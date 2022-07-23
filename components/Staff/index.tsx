import type { NextPage } from "next";

import styles from "../../styles/Staff.module.css";

import verbiage from "../../content/HomePage.json";

const { staff } = verbiage;

const Staff: NextPage = () => {
  return (
    <div className={styles.staff}>
      {staff.map((person, index) => {
        return (
          <div key={`staff-${index}`} className={styles.person}>
            <img src={person.img} />
            <div className={styles.card}>
              <h4>{person.title}</h4>
              <p>{person.text}</p>
              <a href={person.action[1]}>{person.action[0]}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Staff;
