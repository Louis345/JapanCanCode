import type { NextPage } from "next";

import Menu from "../Menu";

const Header: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/header-bg.png')",
        width: "100vw",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Menu />
      <div>
        <h1>Japan Can Code</h1>
        <p>lorem ipsum dolor sit amet</p>
        <button>something</button>
        <button>something</button>
      </div>
    </div>
  );
};

export default Header;
