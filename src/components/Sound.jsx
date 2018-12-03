import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';

const Sound = ({ sound: { play, note } }) => {
  if (play) {
    // TODO: encapsulate this somewhere
    const feedbackDelay = new Tone.PingPongDelay({
      delayTime: '2n',
      feedback: 0.3,
      wet: 0.3,
    }).toMaster();
    const synth = new Tone.PolySynth(6, Tone.Synth, {
      oscillator: {
        partials: [0, 2, 3, 4],
      },
    })
      .toMaster()
      .connect(feedbackDelay);
    synth.triggerAttackRelease(note, '8n');
  }

  return <Fragment />;
};

Sound.propTypes = {
  sound: PropTypes.shape({
    play: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
};

export default Sound;
