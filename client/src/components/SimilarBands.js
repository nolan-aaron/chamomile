import Band from "./Band.js";
import Error from "./Error.js";
import Spinner from 'react-bootstrap/Spinner';
import { useSimilarBands } from "../hooks/useSimilarBands.js";
import { useParams } from "react-router-dom";

const SimilarBands = () => {
  const { band } = useParams();
  const { bands, loading, error } = useSimilarBands(band);

  const similarBands = bands.map((band, index) => (
    <Band key={index} bandName={band.Name} />
  ));

  return (
    <div className="p-3">
      {loading && !error ? <Spinner animation="border" variant="success" role="status"/> : similarBands}
      {error && <Error error={error} />}
    </div>
  );
};

export default SimilarBands;