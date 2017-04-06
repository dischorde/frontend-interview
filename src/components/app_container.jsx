import { connect } from 'react-redux';
import App from './app.js';
import { receiveMessage } from '../actions/satori_actions.js';

const mapStateToProps = (state) => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
