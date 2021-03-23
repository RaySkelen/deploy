import { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import styles from "./App.module.css";
import GameStart from "./components/gameStart";
import Game from "./components/game";
import GameEnd from "./components/gameEnd";
import { getConfigState } from "./redux/config-reducer";
import { getDataState } from "./redux/data-reducer";
import { getGameState, setAppInitialized } from "./redux/gameState-reducer";

const App = (props) => {
  useLayoutEffect(() => {
    props.getConfigState();
    props.getDataState();
    props.getGameState();
  }, []);
  useEffect(() => {
    if (props.config && props.data && props.game) {
      props.setAppInitialized();
    }
  }, [props.config, props.data, props.game]);
  return (
    <div className={styles.app}>
      <Route exact path="/">
        <Redirect to="/gameStart" />
      </Route>
      <Route path="/gameStart" render={() => <GameStart />} />
      <Route path="/game" render={() => <Game />} />
      <Route path="/gameEnd" render={() => <GameEnd />} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  config: state.config.configStateReady,
  data: state.data.dataStateReady,
  game: state.game.gameStateReady,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getConfigState,
    getDataState,
    getGameState,
    setAppInitialized,
  })
)(App);
