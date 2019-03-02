import * as R from 'ramda';

export default ({ sound: { baseSounds } }) => R.all(R.propEq('loaded', true))(baseSounds);
