import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import HandBlock from "../assets/Hand";
import { getDataState } from "../redux/data-reducer";
import { setLevel } from "../redux/gameState-reducer";
import styles from "./gameEnd.module.css";

const GameEnd = (props) => {
  useLayoutEffect(() => {
    props.getDataState();
  }, []);
  const finalScore = (level) => {
    return props.scoreTemplate !== undefined
      ? props.scoreTemplate[level - 1]
      : null;
  };
  return (
    <div className={styles.container}>
      <HandBlock />
      <div className={styles.scoreContainer}>
        <div className={styles.sign}>Total score: </div>
        <div className={styles.score}>${finalScore(props.level)} earned</div>
        <Link to="/game" className={styles.link}>
          <button onClick={() => props.setLevel(1)} className={styles.button}>
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  level: state.game.currentLevel,
  scoreTemplate: state.config.score,
});

export default compose(connect(mapStateToProps, { getDataState, setLevel }))(
  GameEnd
);
