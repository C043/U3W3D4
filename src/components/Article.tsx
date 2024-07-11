import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../interfaces/iArticle";
import { Col, Row, Spinner } from "react-bootstrap";

const Article = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id);
      if (resp.ok) {
        const article: Article = await resp.json();
        setArticle(article);
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return isLoading ? (
    <div className="d-flex justify-content-center">
      <Spinner variant="warning" />
    </div>
  ) : (
    <>
      <h1 className="mb-3">{article?.title}</h1>
      <Row>
        <Col xs="12" md="4">
          <img src={article?.image_url} alt="article-image" style={{ width: "100%" }} />
        </Col>
        <Col>
          <p>{article?.summary}</p>
        </Col>
      </Row>
    </>
  );
};

export default Article;
