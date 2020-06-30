import NewsAPI from "../util/news_api_util";

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_NEWS_ERROR = "RECEIVE_NEWS_ERROR";
export const CLEAR_ARTICLES = "CLEAR_ARTICLES";

const receiveArticles = (articles) => ({
  type: RECEIVE_ARTICLES,
  articles,
});

const receiveNewsError = (error) => ({
  type: RECEIVE_NEWS_ERROR,
  error,
});

export const clearArticles = () => ({
  type: CLEAR_ARTICLES,
});

export const fetchArticles = (name) => (dispatch) =>
  NewsAPI.articlesByName(name)
    .then((res) => {
      return dispatch(receiveArticles(res.data.value));
    })
    .catch((e) => dispatch(receiveNewsError(e.response.data)));
