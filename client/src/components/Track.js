import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";

const Track = ({ track }) => {
  const trackPlaycount = Number(track.playcount).toLocaleString("en-US");

  return (
    <Col>
      <Card>
        <Card.Header as="code">{track.name}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{trackPlaycount}</Card.Subtitle>
          <Card.Link href={track.url} target="blank">
            Listen
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Track;
