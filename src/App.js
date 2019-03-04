import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Loading from './components/Loading';
import Sound from './components/Sound';
import NoteContainer from './components/NoteContainer';
import WithTrigger from './components/WithTrigger';
import { sounds } from './utils/sounds';
import Flicker from './components/Flicker';
import BackgroundImg from './components/BackgroundImg';
import colours from './utils/colours';
import { soundLoaded as soundLoadedAction } from './actions';
import baseSoundsLoaded from './selectors';

const Background = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, ${colours.themeOne}dd, ${colours.themeTwo}dd);
  transform-origin: center;

  animation: Gradient 100s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
    50% {
      background-position: 100% 25%;
      opacity: 1;
    }
    100% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
  }
`;

const Background2 = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
`;

const App = ({ loaded, soundLoaded }) => (
  <Fragment>
    {/* base sounds - these need to be loaded before the rest of the app */}
    <Sound
      soundId={sounds.drone}
      options={{ loop: true }}
      play
      baseSound
      notifyLoaded={soundLoaded}
    />
    <Sound
      soundId={sounds.synthline}
      options={{ loop: true }}
      play
      baseSound
      notifyLoaded={soundLoaded}
    />

    {loaded ? (
      <Fragment>
        {/* triggered sounds */}
        <WithTrigger>
          <Sound soundId="" />
        </WithTrigger>

        {/* synth */}
        <NoteContainer />

        {/* background images */}
        <Background className="App" />

        <BackgroundImg
          url="./bg3.jpeg"
          startX="10%"
          endX="100%"
          startY="10%"
          endY="0%"
          duration="150s"
          baseOpactiy={0.2}
        />
        <BackgroundImg
          url="./bg.jpeg"
          startX="0%"
          endX="100%"
          startY="50%"
          endY="10%"
          duration="120s"
          baseOpactiy={0.4}
        />
        <BackgroundImg
          url="./bg.jpeg"
          startX="100%"
          endX="0%"
          startY="30%"
          endY="5%"
          duration="90s"
          baseOpactiy={0.4}
        />
        <BackgroundImg
          url="./bg2.jpeg"
          startX="60%"
          endX="100%"
          startY="5%"
          endY="0%"
          duration="190s"
          baseOpactiy={0.3}
        />

        <Background2>
          <WithTrigger>
            <Flicker />
          </WithTrigger>
        </Background2>
      </Fragment>
    ) : (
      <Loading />
    )}
  </Fragment>
);

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  soundLoaded: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  soundLoaded: id => dispatch(soundLoadedAction(id)),
});

const mapStateToProps = state => ({
  loaded: baseSoundsLoaded(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
