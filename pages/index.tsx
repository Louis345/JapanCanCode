import type { NextPage } from "next";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
