import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import HandBlock from "../assets/Hand";
import styles from "./gameStart.module.css";

const GameStart = (props) => {
  return (
    <div className={styles.container}>
      <HandBlock />
      <div className={styles.scoreContainer}>
        <div className={styles.sign}>Who wants to be a millionaire?</div>
        <Link to="/game" className={styles.link}>
          <button className={styles.button}>Start</button>
        </Link>
      </div>
      <div className={styles.triangle}> </div>
    </div>
  );
};

export default compose(connect(null, {}))(GameStart);
