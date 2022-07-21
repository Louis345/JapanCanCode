import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Menu from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Menu />
    </div>
  );
};

export default Home;
