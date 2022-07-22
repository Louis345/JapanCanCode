import type { NextPage } from "next";

import styles from "../../styles/Posts.module.css";

import verbiage from "../../content/HomePage.json";

const { posts } = verbiage;

type POST = {
  img: string;
  title: string;
  text: string;
  action: string[];
};

const Post = ({ post, right }: { post: POST; right?: boolean }) => {
  return (
    <div
      className={styles.post}
      style={right ? { flexDirection: "row-reverse" } : {}}
    >
      <img src={post.img} />
      <div>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <a href={post.action[1]}>{post.action[0]}</a>
      </div>
    </div>
  );
};

const Posts: NextPage = () => {
  return (
    <div className={styles.posts}>
      {posts.map((data, index) => {
        if (index % 2 !== 0) {
          return <Post key={`0xjcc${index}`} post={data} right />;
        }
        return <Post key={`0xjcc${index}`} post={data} />;
      })}
    </div>
  );
};

export default Posts;
