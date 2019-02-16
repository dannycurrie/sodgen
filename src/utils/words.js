import sea from './sea';

const phrases = sea();

export default () => phrases[Math.floor(Math.random() * phrases.length)];
