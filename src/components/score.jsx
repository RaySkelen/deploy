import React from "react";
import s from "./scoreItem.module.css";

const ScoreBoard = (props) => {
  let board;

  if (props.scorePoints) {
    board = props.scorePoints.map((e, i) => (
      <ScoreItem key={i} amount={e} level={props.level} id={i} />
    ));
  }

  return <div className={s.board}>{board}</div>;
};

const ScoreItem = (props) => {
  return (
    <div>
      {props.level === props.id + 1 && (
        <svg
          className={s.item}
          width="100%"
          height="100%"
          viewBox="0 0 376 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M69 20H0" stroke="#FF8B37" />
          <path d="M376 20H307" stroke="#FF8B37" />
          <path
            d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
            fill="white"
            stroke="#FF8B37"
          />
          <text
            x="50%"
            y="50%"
            fill="#FF8B37"
            textAnchor="middle"
            dominantBaseline="middle"
            className={s.itemText}>
            ${props.amount}
          </text>
        </svg>
      )}
      {props.level < props.id + 1 && (
        <svg
          className={s.item}
          width="100%"
          height="100%"
          viewBox="0 0 376 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M69 20H0" stroke="#D0D0D8" />
          <path d="M376 20H307" stroke="#D0D0D8" />
          <path
            d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
            fill="white"
            stroke="#D0D0D8"
          />
          <text
            x="50%"
            y="50%"
            fill="black"
            className={s.itemText}
            dominantBaseline="middle"
            textAnchor="middle">
            ${props.amount}
          </text>
        </svg>
      )}
      {props.level > props.id + 1 && (
        <svg
          className={s.item}
          width="100%"
          height="100%"
          viewBox="0 0 376 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M69 20H0" stroke="#D0D0D8" />
          <path d="M376 20H307" stroke="#D0D0D8" />
          <path
            d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
            fill="white"
            stroke="#D0D0D8"
          />
          <text
            fill="#D0D0D8"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={s.itemText}>
            ${props.amount}
          </text>
        </svg>
      )}
    </div>
  );
};

export default ScoreBoard;
