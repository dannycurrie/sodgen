import Tone from 'tone';
import Octavian from 'octavian';

const feedbackDelay = new Tone.FeedbackDelay({
  delayTime: '8n',
  feedback: 0.6,
}).toMaster();

const freeverb = new Tone.Freeverb({
  roomSize: 0.7,
  dampening: 4300,
}).toMaster();
const jcr = new Tone.JCReverb({
  roomSize: 0.5,
}).toMaster();
const dist = new Tone.Distortion({
  distortion: 0.08,
  wet: 0.3,
}).toMaster();

const effects = [dist, feedbackDelay, freeverb, jcr];

const connectSynth = (effectsList, synth) => effectsList.reduce((s, effect) => {
  s.connect(effect);
  return s;
}, synth);

export const getSynth = () => connectSynth(
  effects,
  new Tone.PolySynth(6, Tone.Synth, {
    harmonicity: 3.01,
    modulationIndex: 14,
    envelope: {
      attack: 0.2,
      decay: 0.3,
      sustain: 0.1,
      release: 1.2,
    },
    modulation: {
      type: 'square',
    },
    modulationEnvelope: {
      attack: 0.01,
      decay: 0.5,
      sustain: 0.2,
      release: 0.1,
    },
    oscillator: {
      type: 'triangle',
    },
    volume: -28,
  }).toMaster()
);

export const getChord = (root) => {
  const note = new Octavian.Note(root);

  const fourth = note.perfectFourth();

  return [note.signature, fourth.signature];
};
