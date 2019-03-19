let ctx;

const getAudioContext = () => {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
};

const getRequest = (audioURL, opts, resolve, start) => {
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
      if (start) {
        audioBufferSource.start();
        resolve();
      } else {
        resolve(() => audioBufferSource.start());
      }
    });
  };
  return soundReq;
};

export default (audioURL, opts = {}, start = true) => new Promise(resolve => getRequest(audioURL, opts, resolve, start).send());
