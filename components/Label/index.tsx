import type { NextPage } from "next";

import verbiage from "../../content/HomePage.json";

import styles from "../../styles/Label.module.css";

const { label } = verbiage;

const Label: NextPage = () => {
  return (
    <div className={styles.label}>
      <p>{label.text}</p>
      <a href={label.action[1]}>{label.action[0]}</a>
    </div>
  );
};

export default Label;
