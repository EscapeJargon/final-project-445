import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { name } = useParams();
  // create state variables which will be initialized when the app loads from the server
  const [article, setArticle] = useState({});
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/articles/${name}`
        );
        setArticle(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    loadArticleInfo();
  }, [name]);

  const addUpvote = async () => {
    const response = await axios.put(
      `http://localhost:5050/articles/${name}/upvotes`
    );
    const updatedArticle = response.data;
    console.log(updatedArticle);
    setArticle(updatedArticle);
  };

  // const addComment = async () => {
  //   const temp_comments = [...article.comments, { author: author, text: text }];
  //   const response = await axios.put(`/articles/${name}/comments`, {
  //     ...article,
  //     comments: temp_comments,
  //   });
  //   setArticle({ ...article, comments: response.data.comments });
  //   setAuthor("");
  //   setText("");
  // };

  if (!article.content) {
    return <NotFoundPage />;
  }

  return (
    <div className="pgbody">
      <h1>{article.title}</h1>
      <div id="upvotes-section">
        <button onClick={addUpvote}>Add Upvote</button>
        <p>This article has {article.upvotes} upvotes</p>
      </div>
      <div id="content-section">
        {article.content.map((paragraph) => (
          <p key={paragraph}> {paragraph} </p> //
        ))}
      </div>

      <div id="add-comment-form">
        <h3>Add a comment</h3>
        <label htmlFor="commentAuthor">Name: </label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="commentAuthor"
        />

        <label htmlFor="commentText">Comment: </label>
        <textarea
          rows="4"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="commentText"
        ></textarea>

        <button>add comment</button>
      </div>
      <h3>Comments</h3>
      {article.comments.map((comment) => (
        <div key={`${comment.text}`} className="comment">
          <h4>{comment.author}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;

// NOTES
// IN order to extract the page name from our URL we need to make use of the useParams tool from the react router dom.  THis means that we need to import the tool.
// Remember to use a key in any structure which 'loops' or iterates over content.  in this case we use the map to loop over the paragraphs so we will set the key attribute in the paragraph element
