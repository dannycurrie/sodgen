import Tone from 'tone';
import Octavian from 'octavian';

const feedbackDelay = new Tone.PingPongDelay({
  delayTime: '2n',
  feedback: 0.3,
  wet: 0.3,
}).toMaster();

const freeverb = new Tone.Freeverb().toMaster();
freeverb.roomSize.value = 0.9;
const jcr = new Tone.JCReverb(0.9).toMaster();
const autoWah = new Tone.AutoWah(50, 6, -30).toMaster();
// const cheby = new Tone.Chebyshev(50).toMaster();

const effects = [feedbackDelay, freeverb, jcr, autoWah];

const connectSynth = (effectsList, synth) => effectsList.reduce((s, effect) => {
  s.connect(effect);
  return s;
}, synth);

const getSynthPreset = () => ({
  harmonicity: 3.999,
  oscillator: {
    type: 'square',
  },
  envelope: {
    attack: 0.03,
    decay: 0.3,
    sustain: 0.7,
    release: 0.8,
  },
  modulation: {
    volume: 12,
    type: 'square6',
  },
  modulationEnvelope: {
    attack: 2,
    decay: 3,
    sustain: 0.8,
    release: 0.1,
  },
});

export const getSynth = () => connectSynth(effects, new Tone.Synth(getSynthPreset()).toMaster());

export const getChord = (root) => {
  const note = new Octavian.Note(root);

  const fourth = note.perfectFourth();

  return [note.signature, fourth.signature];
};
