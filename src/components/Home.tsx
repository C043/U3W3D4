import { useEffect, useState } from "react";
import SpaceNav from "./SpaceNav";
import { Container, Row, Spinner } from "react-bootstrap";
import { News } from "../interfaces/iNews";
import SingleNews from "./SingleNews";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const news = await resp.json();
        setNews(news.results);
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
    fetchNews();
  }, []);

  return (
    <Container>
      <h1 className="my-3">Latest News</h1>
      <Row className="mb-5 g-2">
        {isLoading ? <Spinner variant="primary" /> : news.map((news: News) => <SingleNews key={news.id} news={news} />)}
      </Row>
    </Container>
  );
};

export default Home;
