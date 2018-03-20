import React from 'react';
import { connect } from 'react-redux';

import Frame from './Frame';

class Display extends React.Component {
  render() {
    const { isClosed, isLocked } = this.props;
    const lockedState = isLocked ? 'Locked' : 'Unlocked';
    const closedState = isClosed ? 'Closed' : 'Open';

    return (
      <Frame>
        <h1>Display</h1>
        <div
          style={{
            color: 'white',
            backgroundColor: isClosed ? 'red' : 'green',
            padding: '0.5rem 1rem',
          }}
        >
          {lockedState} {closedState}
        </div>
      </Frame>
    );
  }
}

const mapStateToProps = state => {
  // this is the whole application state === store.
  return {
    // merged into the props
    isLocked: state.isLocked,
    isClosed: state.isClosed,
  };
};

// const connectedContainer = connect(mapStateToProps);
// export default connectedContainer(Display);

// const maptDispatchToProps = (dispatch) => {
//   // some code that decides what (which action to dispatch) to return.
//   return {
//     add: dispatch()
//   }
// }

export default connect(mapStateToProps)(Display);
