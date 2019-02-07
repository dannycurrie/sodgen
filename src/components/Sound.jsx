import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { getSound } from '../utils/sounds';
import getAudioPlayer from '../utils/web-audio';

const Sound = ({ soundId, options, play }) => {
  const soundURL = R.either(R.isNil, R.isEmpty)(soundId) ? null : getSound(soundId);
  if (soundURL) {
    const player = getAudioPlayer(soundURL, options);
    if (play) {
      player();
    }
  }
  return <Fragment />;
};

Sound.propTypes = {
  soundId: PropTypes.string,
  play: PropTypes.bool,
  options: PropTypes.any,
};

Sound.defaultProps = {
  soundId: '',
  options: {},
  play: false,
};

export default Sound;
