// what actions could modify the isClosed slice of state?
// closed - OPEN -> open
// open - CLOSE -> closed

import { OPEN, CLOSE } from '../actions/openActions';

export default function open(isClosed = true, action) {
  switch (action.type) {
    case OPEN:
      return false;
    case CLOSE:
      return true;
    default:
      return isClosed;
  }
}
// now go wire this to the store
