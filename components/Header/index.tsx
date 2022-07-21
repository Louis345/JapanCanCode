import type { NextPage } from "next";

import content from "../../content/HomePage.json";

import styles from "../../styles/Header.module.css";

import Menu from "../Menu";

const { header } = content;

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <Menu />
      <div className={styles.hero}>
        <h1>{header.text}</h1>
        <p>{header.subtext}</p>
        {header.actions.map((action) => {
          return (
            <a className={styles.action} href={action[1]}>
              {action[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
