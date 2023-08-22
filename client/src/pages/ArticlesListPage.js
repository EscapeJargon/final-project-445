import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/articles/`);
        setArticles(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadArticleInfo();
  }, []);

  return (
    <div className="pgbody">
      <h1>Articles</h1>
      {articles.map((article) => (
        <Link key={`${article.name}`} to={`/articles/${article.name}`}>
          <div className="article-list-item">
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 180)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesListPage;
