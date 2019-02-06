let ctx;

const getAudioContext = () => {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
};

export default (audioURL, opts = {}) => {
  const soundReq = new XMLHttpRequest();
  soundReq.open('GET', audioURL, true);
  soundReq.responseType = 'arraybuffer';
  const context = getAudioContext();
  soundReq.onload = () => {
    context.decodeAudioData(soundReq.response).then((data) => {
      const audioBuffer = data;
      const audioBufferSource = context.createBufferSource();
      audioBufferSource.buffer = audioBuffer;
      audioBufferSource.connect(context.destination);
      if (opts.loop) {
        audioBufferSource.loop = true;
      }
      audioBufferSource.start();
    });
  };
  return () => soundReq.send();
};
