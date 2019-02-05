import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getSound } from '../utils/sounds';
import getAudioPlayer from '../utils/web-audio';

const Sound = ({ soundId }) => {
  const player = getAudioPlayer(getSound(soundId));
  player();
  return <Fragment />;
};

Sound.propTypes = {
  soundId: PropTypes.string.isRequired,
};

export default Sound;
