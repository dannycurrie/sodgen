import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { getSound } from '../utils/sounds';
import getAudio from '../utils/web-audio';

const playSound = (url, options) => getAudio(url, options);

const Sound = ({
  soundId, options, play, baseSound, notifyLoaded,
}) => {
  const soundURL = R.either(R.isNil, R.isEmpty)(soundId) ? null : getSound(soundId);
  // if no sound, don't play
  if (!soundURL) return <Fragment />;

  // if a base sound...
  if (baseSound) {
    const [isInitialised, initialise] = useState(false);

    if (!isInitialised) {
      playSound(soundURL, options).then(() => {
        initialise(true);
        notifyLoaded(soundId);
      });
    }
  } else if (play) {
    playSound(soundURL, options);
  }
  return <Fragment />;
};

Sound.propTypes = {
  soundId: PropTypes.string,
  play: PropTypes.bool,
  // eslint-disable-next-line
  options: PropTypes.any,
  baseSound: PropTypes.bool,
  notifyLoaded: PropTypes.func,
};

Sound.defaultProps = {
  soundId: '',
  options: {},
  play: false,
  baseSound: false,
  notifyLoaded: () => {},
};

export default Sound;
