import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from './Sound';

class SoundContainer extends PureComponent {
  render() {
    const { sounds } = this.props;
    return (
      <Fragment>
        {sounds.map(sound => (
          <Fragment key={sound.id}>
            <Sound sound={sound} />
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

SoundContainer.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  sounds: state,
});

export default connect(mapStateToProps)(SoundContainer);
