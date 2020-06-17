import {
  address,
  officials,
  offices,
  levels,
} from "../../reducers/selectors/selectors";
import { fetchRepresentatives } from "../../actions/search_actions";
import { connect } from "react-redux";
import SearchIndex from "./search_index";

const mSTP = (state) => ({
  address: address(state),
  officialsObj: officials(state),
  officesObj: offices(state),
  levelsObj: levels(state),
});

const mDTP = (dispatch) => ({
  fetchRepresentatives: (address) => dispatch(fetchRepresentatives(address)),
});

const SearchContainer = connect(mSTP, mDTP)(SearchIndex);

export default SearchContainer;
