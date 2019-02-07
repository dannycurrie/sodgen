const soundsPath = '/sounds';
const soundFormat = 'wav';

export const sounds = {
  drone: 'drone',
  synthline: 'synthline',
  l_bell_1: 'l_bell_1',
  l_bell_2: 'l_bell_2',
  l_bell_3: 'l_bell_3',
  l_bell_4: 'l_bell_4',
  l_bell_5: 'l_bell_5',
  l_bell_6: 'l_bell_6',
  l_bell_7: 'l_bell_7',
  r_bell_1: 'r_bell_1',
  r_bell_2: 'r_bell_2',
  r_bell_3: 'r_bell_3',
  r_bell_4: 'r_bell_4',
  r_bell_5: 'r_bell_5',
  r_bell_6: 'r_bell_6',
  r_bell_7: 'r_bell_7',
};

export const getSound = (soundId) => {
  if (soundId in sounds) {
    return `${soundsPath}/${soundId}.${soundFormat}`;
  }
  console.warn(`unrecognised sound ${soundId}`);
  return null;
};
