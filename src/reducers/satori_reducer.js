import { RECEIVE_MESSAGE } from '../actions/satori_actions.js';
import { merge } from 'lodash';

const SatoriReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MESSAGE:
      const message = {
        entity: action.message.entity[0],
        header: action.message.header
      };

      return merge({}, state, {
        [message.entity.id]: message
      });
    default:
      return state;
  }
};

export default SatoriReducer;
