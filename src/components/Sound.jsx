import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { getSound } from '../utils/sounds';
import getAudio from '../utils/web-audio';

const playSound = (url, options) => getAudio(url, options);

const Sound = ({ soundId, options }) => {
  const soundURL = R.either(R.isNil, R.isEmpty)(soundId)
    ? null
    : getSound(soundId);
  // if no sound, don't play
  if (!soundURL) return <Fragment />;

  playSound(soundURL, options);
  return <Fragment />;
};

Sound.propTypes = {
  soundId: PropTypes.string,
  // eslint-disable-next-line
  options: PropTypes.any
};

Sound.defaultProps = {
  soundId: '',
  options: {},
};

export default Sound;
