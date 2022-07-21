import type { NextPage } from "next";

import verbiage from "../../content/HomePage.json";

const { menu } = verbiage;

const Menu: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <ul>
        {menu.resources.map((resource, index) => {
          return (
            <li key={`${resource[0]}-${index}`}>
              <a href={resource[1]}>{resource[0]}</a>
            </li>
          );
        })}
      </ul>
      <ul>
        {menu.langs.map((resource, index) => {
          return <li key={`${resource}-${index}`}>{resource}</li>;
        })}
      </ul>
      <a href={menu.action[1]}>{menu.action[0]}</a>
    </div>
  );
};

export default Menu;
