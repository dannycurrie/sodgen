import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WithTrigger = ({ children, ...rest }) => (
  <Fragment>
    {React.Children.map(children, child => React.cloneElement(child, { ...rest, play: true }))}
  </Fragment>
);

WithTrigger.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  soundId: state.sound.soundId,
});

export default connect(mapStateToProps)(WithTrigger);
