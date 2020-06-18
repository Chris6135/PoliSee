import axios from "axios";

const key = process.env.REACT_APP_NEWS_API_KEY

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");


const NewsAPI = {
  articlesByName: (name) => 
    axios.get(
      `https://newsapi.org/v2/everything?q=${formatString(name)}&apiKey=${key}&pageSize=12`
    ),
}

export default NewsAPI