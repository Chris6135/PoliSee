import NewsAPI from "../util/news_api_util";

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

const receiveArticles = (articles) => ({
  type: RECEIVE_ARTICLES,
  articles
})

export const fetchArticles = (name) => (dispatch) => 
  NewsAPI.articlesByName(name)
  .then((res) => dispatch(receiveArticles(res.articles)))
