import getAPI from "../api/api";

let initialState = [];

const SET_CURRENT_SCORE = "SET_CURRENT_SCORE";
const SET_GAME_STATE = "SET_GAME_STATE";
const SET_APP_INITIALIZATION = "SET_GAME_INITIALIZATION";
const SET_GAME_INITIALIZATION = "SET_GAME_INITIALIZATION";
const SET_CURRENT_QUESTION = "SET_ANSWERS_AMOUNT";
const SET_CURRENT_LEVEL = "SET_CURRENT_LEVEL";
const FINISH_GAME = "FINISH_GAME";

const gameStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      return { ...action.state, gameStateReady: true };
    }
    case SET_APP_INITIALIZATION: {
      return { ...state, appInitialized: true };
    }
    case SET_GAME_INITIALIZATION: {
      return { ...state, gameInitialized: true };
    }
    case SET_CURRENT_SCORE: {
      return { ...state, currentScore: action.currentScore };
    }
    case SET_CURRENT_QUESTION: {
      return { ...state, currentQuestion: action.currentQuestion };
    }
    case SET_CURRENT_LEVEL: {
      return { ...state, currentLevel: action.currentLevel };
    }
    case FINISH_GAME: {
      return { ...state, finished: true };
    }
    default:
      return state;
  }
};

export const getGameState = () => (dispatch) => {
  getAPI.getGameState().then((response) => {
    dispatch(setState(response));
  });
};

const setState = (state) => ({ type: SET_GAME_STATE, state });
export const finishGame = () => ({ type: FINISH_GAME });
export const setAppInitialized = () => ({ type: SET_APP_INITIALIZATION });
export const setGameInitialized = () => ({ type: SET_GAME_INITIALIZATION });
export const setScore = (currentScore) => ({
  type: SET_CURRENT_SCORE,
  currentScore,
});
export const setCurrentQuestion = (currentQuestion) => ({
  type: SET_CURRENT_QUESTION,
  currentQuestion,
});
export const setLevel = (currentLevel) => ({
  type: SET_CURRENT_LEVEL,
  currentLevel,
});

export default gameStateReducer;
