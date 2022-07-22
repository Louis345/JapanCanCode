import type { NextPage } from "next";

import styles from "../../styles/Reviews.module.css";

import verbiage from "../../content/HomePage.json";

const { reviews } = verbiage;

const Reviews: NextPage = () => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => {
        return (
          <div className={styles.review}>
            <div className={styles.header}>
              <img src={review.img} />
              <p>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </p>
              <p>
                {review.stars}
                <img src="/assets/review-star.png" />
              </p>
            </div>
            <p>{review.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
