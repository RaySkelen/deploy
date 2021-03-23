import getAPI from "../api/api";

let initialState = [];

const SET_CONFIG_STATE = "SET_CONFIG_STATE";
const SET_QUESTIONS_AMOUNT = "SET_QUESTIONS_AMOUNT";
const SET_CORRECT_ANSWERS_AMOUNT = "SET_CORRECT_ANSWERS_AMOUNT";

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG_STATE: {
      return { ...action.state, configStateReady: true };
    }
    case SET_QUESTIONS_AMOUNT: {
      return { ...state, questionsAmount: action.questionsAmount };
    }
    case SET_CORRECT_ANSWERS_AMOUNT: {
      return { ...state, correctAnswersAmount: action.correctAnswersAmount };
    }
    default:
      return state;
  }
};

export const getConfigState = () => (dispatch) => {
  getAPI.getConfig().then((response) => {
    dispatch(setState(response));
  });
};

const setState = (state) => ({ type: SET_CONFIG_STATE, state });
export const setQuestionsAmount = (questionsAmount) => ({
  type: SET_QUESTIONS_AMOUNT,
  questionsAmount,
});
export const setCorrectAnswersAmount = (correctAnswersAmount) => ({
  type: SET_CORRECT_ANSWERS_AMOUNT,
  correctAnswersAmount,
});

export default configReducer;
