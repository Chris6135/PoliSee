import {
  RECEIVE_NEWS_ERROR,
  RECEIVE_ARTICLES,
} from "../../actions/news_actions";

const newsErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_ERROR:
      return action.error;
    case RECEIVE_ARTICLES:
      return null;
    default:
      return state;
  }
};

export default newsErrorsReducer;
