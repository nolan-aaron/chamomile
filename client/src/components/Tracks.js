import Track from "./Track";
import Row from "react-bootstrap/Row";

const Tracks = ({ tracks }) => {
  const formattedTracks = tracks.map((track, index) => (
    <Track key={index} track={track} />
  ));

  return (
    <Row xs={2} md={3} lg={6} className="g-4">
      {formattedTracks}
    </Row>
  );
};

export default Tracks;
