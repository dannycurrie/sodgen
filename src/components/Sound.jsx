import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getSound } from '../utils/sounds';
import getAudioPlayer from '../utils/web-audio';

const Sound = ({ soundId, options, play }) => {
  const soundURL = getSound(soundId);
  if (soundURL) {
    const player = getAudioPlayer(soundURL, options);
    if (play) {
      player();
    }
  }
  return <Fragment />;
};

Sound.propTypes = {
  soundId: PropTypes.string.isRequired,
  play: PropTypes.bool,
  options: PropTypes.any,
};

Sound.defaultProps = {
  options: {},
  play: false,
};

export default Sound;
