import axios from "axios";

const key = process.env.REACT_APP_NEWS_API_KEY

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");


const NewsAPI = {
  articlesByName: (name) => {
    return axios.get(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI`,
      {
        headers:
          {
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
          "X-RapidAPI-Key": key,
          "useQueryString": true
        },
        params:
          {
            "autoCorrect": "false",
            "pageNumber": "1",
            "pageSize": "12",
            "q": name,
            "safeSearch": "false"
          }
      }
    )},
}

export default NewsAPI