import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from './Note';

class SoundContainer extends PureComponent {
  render() {
    const { notes } = this.props;
    return (
      <Fragment>
        {notes.map(note => (
          <Fragment key={note.id}>
            <Note note={note} />
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

SoundContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(SoundContainer);
