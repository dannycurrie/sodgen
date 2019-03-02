import * as R from 'ramda';

export default ({ sound: { baseSounds } }) => R.all(s => s.loaded)(baseSounds);
