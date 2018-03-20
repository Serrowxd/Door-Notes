import React from 'react';
import { connect } from 'react-redux';

import Frame from './Frame';
import { lock, unlock } from '../actions/lockActions';
import { open, close } from '../actions/openActions';

class Controls extends React.Component {
  render() {
    const { isLocked, isClosed } = this.props;
    const lockedState = isLocked ? 'Unlock It!' : 'Lock It!';
    const closedState = isClosed ? 'Open It!' : 'Close It!';

    return (
      <Frame>
        <h1>Controls</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={this.handleLock}>{lockedState}</button>
          <button
            onClick={this.handleOpen}
            disabled={this.props.isLocked}
            className={this.props.isLocked ? 'disabled' : null}
          >
            {closedState}
          </button>
        </div>
      </Frame>
    );
  }

  handleLock = () => {
    if (this.props.isLocked) {
      console.log('calling unlock()');
      this.props.unlock();
    } else {
      console.log('calling lock()');
      this.props.lock();
    }

    // this is really just toggling, so we'll change this action to be toggle instead
  };

  handleOpen = () => {
    if (this.props.isClosed) {
      this.props.open();
    } else {
      this.props.close();
    }
  };
}

// gets the whole application state
const mapStateToProps = state => {
  return {
    // picks the properties this component cares about
    // and they get merged into props
    isLocked: state.isLocked,
    isClosed: state.isClosed,
  };
};

export default connect(mapStateToProps, { lock, unlock, open, close })(
  Controls
);
