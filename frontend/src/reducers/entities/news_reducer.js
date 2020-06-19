const { RECEIVE_ARTICLES } = require("../../actions/news_actions");

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};

export default newsReducer;
