import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { News } from "../interfaces/iNews";
import { NavLink } from "react-router-dom";

interface SingleNewsProp {
  news: News;
}

function SingleNews({ news }: SingleNewsProp) {
  return (
    <Col xs="3">
      <Card>
        <Card.Img variant="top" src={news.image_url} className="fixed-height" />
        <Card.Body>
          <Card.Title className="text-truncate">{news.title}</Card.Title>
          <p>{news.published_at.slice(0, 10)}</p>
          <Card.Text className="line-clamp-3">{news.summary}</Card.Text>
          <NavLink to={"/article/" + news.id} className="btn btn-warning">
            Go to article
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleNews;
