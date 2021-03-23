import getAPI from "../api/api";

const SET_DATA_STATE = "SET_DATA_STATE";
const REMOVE_USED_QUESTION = "REMOVE_USED_QUESTION";

let initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_STATE: {
      return { ...action.state, dataStateReady: true };
    }
    case REMOVE_USED_QUESTION: {
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.index),
          ...state.questions.slice(action.index + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export const getDataState = () => (dispatch) => {
  getAPI.getData().then((response) => {
    dispatch(setState(response));
  });
};

const setState = (state) => ({ type: SET_DATA_STATE, state });
export const removeQuestion = (index) => ({
  type: REMOVE_USED_QUESTION,
  index,
});

export default dataReducer;
