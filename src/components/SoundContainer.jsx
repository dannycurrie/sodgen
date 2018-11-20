import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Sound from './Sound';
import { playSound } from '../actions';

class SoundContainer extends PureComponent {
    render() {
        return (
            <Fragment>
                {this.props.sounds.map((sound => (
                    <Fragment key={sound.id}>
                        <Sound sound={sound} />
                    </Fragment>
                )))}
            </Fragment>
        );
    };
}

const mapStateToProps = state => ({
    sounds: state
});

export default connect(mapStateToProps)(SoundContainer);