const phrases = [
  'Cherson!',
  'You aint just whistlin',
  'Dixie, Sea------',
  "We calcimine father's",
  'here below!',
  'Sea Engines from Russia',
  'When rocks outsea froth',
  'cracked up & scramble',
  'up my doublelegged cliff',
  'to the silt of',
  'a million years-----',
  'Shoo-----Shaw-----Shirsh-----',
  'You billion yeared',
];

export default () => phrases[Math.floor(Math.random() * phrases.length)];
