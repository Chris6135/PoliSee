import { CLEAR_ENTITIES } from "../../actions/search_actions";

const {
  RECEIVE_ARTICLES,
  CLEAR_ARTICLES,
} = require("../../actions/news_actions");

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    case CLEAR_ENTITIES:
      return [];
    case CLEAR_ARTICLES:
      return [];
    default:
      return state;
  }
};

export default newsReducer;
