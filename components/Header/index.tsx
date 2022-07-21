import type { NextPage } from "next";

import verbiage from "../../content/HomePage.json";

import styles from "../../styles/Header.module.css";

import Menu from "../Menu";

const { header } = verbiage;

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <Menu />
      <div className={styles.hero}>
        {/* title */}
        <h1>{header.text}</h1>
        {/* hero */}
        <p>{header.subtext}</p>
        {/* actions */}
        <div className={styles.actions}>
          {header.actions.map((action, index) => {
            // all action obj is read as an array
            // of exactly two elements where:
            // array[0]="text"
            // array[1]="/link/to"
            return (
              <a
                key={`header-action-${index}`}
                className={styles.action}
                href={action[1]}
              >
                {action[0]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
