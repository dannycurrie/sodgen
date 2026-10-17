## About

A generative ambient music piece based on a the Jack Kerouac poem [sea](https://shockofdaylight.bandcamp.com/track/firstlight-i)

Music is from an original track from [Shock of Daylight](https://shockofdaylight.bandcamp.com/track/firstlight-i)

This project was originally bootstrapped with Create React App and now builds with
[Vite](https://vite.dev/).

## Requirements

Node 20 or newer.

```
npm install
```

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot module replacement, and opens
[http://localhost:3000](http://localhost:3000).

### `npm test`

Runs the test suite once with [Vitest](https://vitest.dev/). Use `npm run test:watch`
to keep it running against changes.

### `npm run lint`

Lints with ESLint (flat config in `eslint.config.js`) and checks formatting with Prettier.
`npx eslint . --fix` fixes what it can. `npm run format` reformats `src`.

### `npm run build`

Builds the app for production to the `dist` folder, minified and with hashed filenames.
`npm run preview` serves that build locally.

### `npm run deploy`

Builds, then syncs `dist/` to S3.

## How it works

A live Coinbase Exchange ticker feed (`src/data-feed.js`, over RxJS websockets) is read by
`src/SoundEngine.js`, which turns each price into Redux actions - either a one-shot sample or
a note for the Tone.js synth. Components subscribe to that state and play audio in effects:
samples through the Web Audio API (`src/utils/web-audio.js`) and notes through Tone.js
(`src/utils/notes.js`). Browsers keep audio locked until a user gesture, so both audio graphs
are built lazily and unlocked when the play button is pressed.
