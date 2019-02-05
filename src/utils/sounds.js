const soundsPath = '/sounds';
const soundFormat = 'wav';

export const sounds = {
  drone: 'drone',
  synthline: 'synthline',
};

export const getSound = (soundId) => {
  if (soundId in sounds) {
    return `${soundsPath}/${soundId}.${soundFormat}`;
  }
  console.error(`unrecognised sound ${soundId}`);
  return null;
};
