import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import configReducer from "./config-reducer";
import dataReducer from "./data-reducer";
import gameStateReducer from "./gameState-reducer";

let reducers = combineReducers({
  config: configReducer,
  data: dataReducer,
  game: gameStateReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;