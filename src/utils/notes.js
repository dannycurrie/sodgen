import Tone from 'tone';
import Octavian from 'octavian';

export const getSynth = () => {
  const feedbackDelay = new Tone.PingPongDelay({
    delayTime: '2n',
    feedback: 0.3,
    wet: 0.3,
  }).toMaster();
  return new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
      partials: [0, 2, 3, 4],
    },
  })
    .toMaster()
    .connect(feedbackDelay);
};

export const getChord = (root) => {
  const note = new Octavian.Note(root);

  const third = note.majorThird();
  const fifth = note.perfectFifth();
  const octave = note.perfectOctave();

  return [note.signature, third.signature, fifth.signature, octave.signature];
};
