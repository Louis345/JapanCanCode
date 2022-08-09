import type { NextPage } from "next";

import verbiage from "../../content/HomePage.json";

import styles from "../../styles/Footer.module.css";

const { footer } = verbiage;

const Footer: NextPage = () => {
  return (
    <>
      <div className={styles.footer}>
        {footer.map((resource) => {
          return (
            <div key={resource.resource}>
              <h4>{resource.resource}</h4>
              <div className={styles.links}>
                {resource.links.map((link) => {
                  return (
                    <a href={link[1]} key={link[0]}>
                      {link[0]}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.copy}>
        <p>COPYRIGHT © JAPANCANCODE 2021</p>
        <img src="/assets/cards.png" />
      </div>
    </>
  );
};

export default Footer;
