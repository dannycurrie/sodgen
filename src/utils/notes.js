import * as Tone from 'tone';
import Octavian from 'octavian';

let synth;

const createSynth = () => {
  const effects = [
    new Tone.Distortion({ distortion: 0.08, wet: 0.3 }),
    new Tone.FeedbackDelay({ delayTime: '8n', feedback: 0.6 }),
    new Tone.Freeverb({ roomSize: 0.7, dampening: 4300 }),
    new Tone.JCReverb({ roomSize: 0.5 }),
  ].map((effect) => effect.toDestination());

  const polySynth = new Tone.PolySynth({
    maxPolyphony: 6,
    voice: Tone.Synth,
    options: {
      envelope: {
        attack: 0.2,
        decay: 0.3,
        sustain: 0.1,
        release: 1.2,
      },
      oscillator: {
        type: 'triangle',
      },
      volume: -28,
    },
  }).toDestination();

  effects.forEach((effect) => polySynth.connect(effect));

  return polySynth;
};

/** Tone needs starting from a user gesture before it will make any sound. */
export const startTone = () => Tone.start();

// built lazily: creating nodes before the user interacts leaves them suspended
export const getSynth = () => {
  if (!synth) {
    synth = createSynth();
  }
  return synth;
};

export const getChord = (root) => {
  const note = new Octavian.Note(root);
  const fourth = note.perfectFourth();

  return [note.signature, fourth.signature];
};
