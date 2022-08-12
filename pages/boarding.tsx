import type { NextPage } from "next";

import styles from "../styles/BoardingPage.module.css";

import Menu from "../components/Menu";
import { useState } from "react";

type boardingProps = {
  step: number;
  actions: {
    next: () => void;
    prev: () => void;
  };
  // inputs: {
  //   contact: Function;
  //   course: Function;
  //   session: Function;
  // };
};

const useBoarding = () => {
  const [step, setStep] = useState(1);

  function next() {
    step < 3 && setStep(step + 1);
  }
  function prev() {
    step > 1 && setStep(step - 1);
  }
  return {
    step,
    actions: {
      next,
      prev,
    },
  };
};

const Boarding: NextPage = () => {
  const { step, actions }: boardingProps = useBoarding();
  return (
    <>
      {/* header */}
      <div className={styles.header}>
        <Menu />
        <div className={styles.hero}>
          {/* title */}
          <h1>courses</h1>
          {/* hero */}
          <p>get to know the team at japancancode.com</p>
        </div>
      </div>
      <div className={styles.body}>
        {/* minimap */}
        <div className={styles.minimap}>
          <h3>
            <span>1.</span> contact details
          </h3>
          <p>|</p>
          <p>|</p>
          <h3>
            <span>2.</span> choose a course
          </h3>
          <p>|</p>
          <p>|</p>
          <h3>
            <span>3.</span> choose a session
          </h3>
          <div className={styles.quote}>
            <p>
              We care about your time, that&apos;s why we created a 3-stage
              onboarding that will not take more than 5 minutes to complete to
              get started with JapanCanCode.com
            </p>
            <p>Jamal Taylor</p>
            <span>Founder & CEO</span>
          </div>
        </div>
        {/* current state */}
        <div className={styles.current}>
          <div className={styles.head}>
            <h4>step {`${step}`} of 3</h4>
            <p>
              get help - <a>lost of have trouble?</a>
            </p>
          </div>
          {/* step 1 */}
          {step === 1 && (
            <div className={styles.state}>
              <h3>contact information</h3>
              <p>
                Welcome to JapanCanCode, we are glad to see you! Let&apos;s get
                started by letting us know a little bit about you.
              </p>
              <form>
                <div className={styles.input}>
                  <label htmlFor="full_name">Full Name</label>
                  <input id="full_name" type="text" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="email">E-mail Address</label>
                  <input id="email" type="text" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="country">Country</label>
                  <input id="country" type="text" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="text" />
                </div>
              </form>
            </div>
          )}
          {/* step 2 */}
          {step === 2 && (
            <div className={styles.state}>
              <h3>choose a course</h3>
              <p>
                Welcome to JapanCanCode, we are glad to see you! Let&apos;s get
                started by letting us know a little bit about you.
              </p>
              <form>
                <div className={styles.input}>
                  <input id="react-native" type="radio" name="courses" />
                  <label htmlFor="react-native">react native</label>
                </div>
                <div className={styles.input}>
                  <input id="javascript" type="radio" name="courses" />
                  <label htmlFor="javascript">javascript</label>
                </div>
                <div className={styles.input}>
                  <input id="php" type="radio" name="courses" />
                  <label htmlFor="php">php</label>
                </div>
                <div className={styles.input}>
                  <input id="css" type="radio" name="courses" />
                  <label htmlFor="css">css</label>
                </div>
                <div className={styles.input}>
                  <input id="html" type="radio" name="courses" />
                  <label htmlFor="html">html</label>
                </div>
                <div className={styles.input}>
                  <input id="node" type="radio" name="courses" />
                  <label htmlFor="node">node</label>
                </div>
                <div className={styles.input}>
                  <input id="deno" type="radio" name="courses" />
                  <label htmlFor="deno">deno</label>
                </div>
                <div className={styles.input}>
                  <input id="rust" type="radio" name="courses" />
                  <label htmlFor="rust">rust</label>
                </div>
              </form>
            </div>
          )}
          {/* step 3 */}
          {step === 3 && (
            <div className={styles.state}>
              <h3>choose a session</h3>
              <p>
                JapanCanCode.com is all about working on your schedule, choose a
                timeframe you&apos;re comfortable learning with.
              </p>
              <div className={styles.session}>
                <h3>How much time are you planning to invest ?</h3>
                <div>
                  <label htmlFor="from">from</label>
                  <input id="from" type="text" name="courses" />
                </div>
                <div>
                  <label htmlFor="to">to</label>
                  <input id="to" type="text" />
                </div>
                <input type="range" min="1" max="6" />
              </div>
              <p>are you ready for checkout?</p>
              <div>
                <div className={styles.input}>
                  <input id="yes" type="radio" name="checkout" />
                  <label htmlFor="yes">yes</label>
                </div>
                <div className={styles.input}>
                  <input id="no" type="radio" name="checkout" />
                  <label htmlFor="no">no</label>
                </div>
              </div>
            </div>
          )}
          {/* -- */}
          <button onClick={actions.prev}>Skip for now</button>
          <button onClick={actions.next}>Next step</button>
          {/* -- */}
          <div className={styles.foot}>
            <span>back to homepage</span>
            <h2>privacy policy</h2>
            <p>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
            <a>expand privacy policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boarding;
