import type { NextPage } from "next";

import styles from "../../styles/Menu.module.css";

import verbiage from "../../content/HomePage.json";

const { menu } = verbiage;

const Menu: NextPage = () => {
  return (
    <div className={styles.menu}>
      {/* <resources> */}
      <div className={styles.resources}>
        {menu.resources.map((resource, index) => {
          return (
            <a key={`${resource[0]}-${index}`} href={resource[1]}>
              {resource[0]}
            </a>
          );
        })}
      </div>
      {/* </resources> */}

      {/* <language> */}
      <select>
        {menu.langs.map((resource, index) => {
          return (
            <option key={`${resource}-${index}`} value={resource}>
              {resource}
            </option>
          );
        })}
      </select>
      {/* </language> */}

      {/* <action> */}
      <a className={styles.action} href={menu.action[1]}>
        {menu.action[0]}
      </a>
      {/* </action> */}
    </div>
  );
};

export default Menu;
