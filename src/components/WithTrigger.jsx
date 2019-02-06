import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from './Sound';

const WithTrigger = ({ soundId }) => (
  <Fragment>
    <Sound soundId={soundId} play />
  </Fragment>
);

WithTrigger.propTypes = {
  soundId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  soundId: state.soundId,
});

export default connect(mapStateToProps)(WithTrigger);
