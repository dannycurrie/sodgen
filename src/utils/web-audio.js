let ctx;

const getAudioContext = () => {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
};

/**
 * Browsers start an AudioContext in the `suspended` state until the user
 * interacts with the page, so this has to be called from a user gesture.
 */
export const resumeAudio = async () => {
  const context = getAudioContext();
  if (context.state !== 'running') {
    await context.resume();
  }
};

// sounds are triggered repeatedly, so each file is only fetched and decoded once
const buffers = new Map();

const loadBuffer = (audioURL) => {
  if (!buffers.has(audioURL)) {
    const buffer = fetch(audioURL)
      .then((response) => response.arrayBuffer())
      .then((data) => getAudioContext().decodeAudioData(data));
    buffers.set(audioURL, buffer);
  }
  return buffers.get(audioURL);
};

/**
 * Plays a sound, or - when `start` is false - resolves with a function that
 * plays it later (a buffer source can only be started once).
 */
export default async (audioURL, opts = {}, start = true) => {
  const context = getAudioContext();
  const source = context.createBufferSource();
  source.buffer = await loadBuffer(audioURL);
  source.loop = Boolean(opts.loop);
  source.connect(context.destination);

  if (!start) return () => source.start();

  source.start();
  return undefined;
};
