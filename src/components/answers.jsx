import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { removeQuestion } from "../redux/data-reducer";
import {
  finishGame,
  setCurrentQuestion,
  setLevel,
} from "../redux/gameState-reducer";
import { ReactComponent as Preloader } from "./../assets/Preloader.svg";
import styles from "./answers.module.css";

const Answers = (props) => {
  const [clickedId, getClickedId] = useState(null);
  const handleClick = (id) => {
    getClickedId(id);
  };
  useEffect(() => {
    if (props.correctAnswer === clickedId) {
      props.setLevel(props.currentLevel + 1);
      let index = props.questions.indexOf(
        props.questions[Math.floor(Math.random() * props.questions.length)]
      );
      props.setCurrentQuestion(props.questions[index]);
      props.removeQuestion(index);
      getClickedId(null);
    }
  }, [clickedId]);
  useEffect(() => {
    if (
      (props.correctAnswer !== clickedId && clickedId !== null) ||
      props.currentLevel === 13
    ) {
      props.finishHandler();
    }
  }, [clickedId]);
  let answers = props.answers.map((a, i) => (
    <Answer
      key={i}
      answer={a}
      id={i}
      getClickedId={handleClick}
      letter={props.letters[i]}
    />
  ));
  return (
    <div className={styles.container}>
      {props.correctAnswer === undefined && <Preloader />}
      {props.correctAnswer !== undefined && answers}
    </div>
  );
};

const Answer = (props) => {
  let id = props.id;
  return (
    <div onClick={() => props.getClickedId(id)} className={styles.answer}>
      <svg
        width="100%"
        height="10%"
        viewBox="0 0 421 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M404 36L421 36" stroke="#D0D0D8" />
        <path d="M0 36L17 36" stroke="#D0D0D8" />
        <path
          d="M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z"
          fill="white"
          stroke="#D0D0D8"
        />
        <text
          x="18%"
          y="50%"
          fill="#1C1C21"
          dominantBaseline="middle"
          className={styles.answerText}>
          {props.answer}
        </text>
        <text
          x="10%"
          y="50%"
          fill="#FF8B37"
          className={styles.letter}
          dominantBaseline="middle">
          {props.letter}
        </text>
      </svg>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLevel: state.game.currentLevel,
  correctAnswer: state.game.currentQuestion.correct,
  answers: state.game.currentQuestion.content,
  level: state.game.currentLevel,
  questions: state.data.questions,
  letters: state.config.letters,
});

export default compose(
  connect(mapStateToProps, {
    setLevel,
    setCurrentQuestion,
    removeQuestion,
    finishGame,
  })
)(Answers);
