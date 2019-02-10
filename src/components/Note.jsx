import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getSynth, getChord } from '../utils/notes';

const Note = ({ note: { play, value } }) => {
  if (play) {
    const synth = getSynth();
    const chord = getChord(value);
    synth.triggerAttackRelease(chord, '8n');
  }

  return <Fragment />;
};

Note.propTypes = {
  note: PropTypes.shape({
    play: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
};

export default Note;
