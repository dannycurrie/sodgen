import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Sound from './Sound';

class SoundContainer extends PureComponent {
  render() {
    const { sounds } = this.props;
    return (
      <Fragment>
        {sounds.map((sound => (
          <Fragment key={sound.id}>
            <Sound sound={sound} />
          </Fragment>
        )))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sounds: state,
});

export default connect(mapStateToProps)(SoundContainer);
