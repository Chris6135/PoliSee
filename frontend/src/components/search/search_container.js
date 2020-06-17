const {
  address,
  officials,
  offices,
} = require("../../reducers/selectors/selectors");

const mSTP = (state, ownProps) => ({
  address: address(state),
  officialsObj: officials(state),
  officesObj: offices(state),
});
