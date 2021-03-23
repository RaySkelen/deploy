import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { compose } from "redux";
import { getDataState, removeQuestion } from "../redux/data-reducer";
import {
  setCurrentQuestion,
  setLevel,
  setScore,
} from "../redux/gameState-reducer";
import {ReactComponent as Preloader} from "./../assets/Preloader.svg";
import {ReactComponent as Menu} from "./../assets/menu.svg";
import {ReactComponent as Close} from "./../assets/close.svg";
import Answers from "./answers";
import Question from "./Question";
import ScoreBoard from "./score";
import styles from "./game.module.css";
import { useMediaQuery } from "react-responsive";

const Game = (props) => {
  const [finished, isFinished] = useState(false);
  const push = useHistory();
  const handleClick = (fin) => {
    isFinished(fin);
  };
  useEffect(() => {
    if (props.questions !== undefined) {
      let index = props.questions.indexOf(
        props.questions[Math.floor(Math.random() * props.questions.length)]
      );
      props.setCurrentQuestion(props.questions[index]);
      props.removeQuestion(index);
    }
  }, [props.initialized]);
  useEffect(() => {
    if (finished !== false) {
      push.push("/gameEnd");
    }
  }, [finished]);
  const isMobile = useMediaQuery({ query: `(max-width: 812px)` });
  const [scoreHidden, showScore] = useState(true);
  const [scoreClass, setScoreClass] = useState(styles.board);
  useEffect(() => {
    if (!isMobile) {
      setScoreClass(styles.board);
      showScore(true);
    }
  }, [isMobile]);
  useEffect(() => {
    if (isMobile) {
      setScoreClass(styles.hidden);
    }
  }, [isMobile]);
  useEffect(() => {
    if (!scoreHidden) {
      setScoreClass(styles.scoreContainer);
    }
  }, [scoreHidden]);
  return (
    <div>
      {props.currentQuestion === null && <Preloader />}
      {props.currentQuestion !== null && props.currentQuestion !== undefined && (
        <div className={styles.flexContainer}>
          <div
            className={scoreHidden ? styles.questionContainer : styles.hidden}>
            <Menu className={styles.menu} onClick={() => showScore(false)} />
            <Question question={props.currentQuestion.question} level={props.currentLevel}/>
            <Answers
              answers={props.currentQuestion.content}
              correctAnswer={props.currentQuestion.correct}
              finishHandler={handleClick}
            />
          </div>
          <Close
            className={!scoreHidden ? styles.close : styles.hidden}
            onClick={() => {
              showScore(true);
              setScoreClass(styles.hidden);
            }}
          />
          <div className={scoreClass}>
            <ScoreBoard
              level={props.currentLevel}
              scorePoints={props.scorePoints}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.game.appInitialized,
  questions: state.data.questions,
  currentQuestion: state.game.currentQuestion,
  currentLevel: state.game.currentLevel,
  score: state.game.currentScore,
  scorePoints: state.config.score,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentQuestion,
    setScore,
    setLevel,
    removeQuestion,
    getDataState,
  })(Game)
);
