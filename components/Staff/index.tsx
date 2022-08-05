import type { NextPage } from "next";

import styles from "../../styles/Staff.module.css";

import verbiage from "../../content/HomePage.json";
import { useState } from "react";

const { staff } = verbiage;

type MODAL = {
  title: string;
  text: string[];
}[];

type PERSON = {
  img: string;
  name: string;
  text: string;
  action: string[];
  title: string;
  position: string;
  modal: {
    title: string;
    text: string[];
  }[];
};

const Modal = ({
  data,
  title,
  position,
  set,
}: {
  data: MODAL;
  title: string;
  position: string;
  set: (arg0: boolean) => void;
}) => {
  return (
    <div className={styles.modal}>
      <h3 onClick={() => set(false)}>
        {`< back to our instructors`} <span>X</span>
      </h3>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src="/assets/modal.png" />
          <div className={styles.profile}>
            <h5>{title}</h5>
            <p>{position}</p>
          </div>
        </div>
        {data.map((item) => {
          return (
            <>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Staff: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  let staff_person: PERSON | undefined;
  return (
    <>
      <div className={styles.staff}>
        {staff.map((person, index) => {
          staff_person = person;
          return (
            <>
              <div key={`staff-${index}`} className={styles.person}>
                <img src={person.img} />
                <div className={styles.card}>
                  <h4>{person.name}</h4>
                  <p>{person.text}</p>
                  <a
                    href={person.action[1]}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    {person.action[0]}
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {showModal && staff_person && (
        <Modal
          data={staff_person.modal}
          title={staff_person.title}
          position={staff_person.position}
          set={setShowModal}
        />
      )}
    </>
  );
};

export default Staff;
