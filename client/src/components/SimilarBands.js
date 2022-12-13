import Band from "./Band.js";
import Loading from "./Loading.js";
import Error from "./Error.js";
import { useSimilarBands } from "../hooks/useSimilarBands.js";
import { useParams } from "react-router-dom";

const SimilarBands = () => {
  const { band } = useParams();
  const { bands, loading, error } = useSimilarBands(band);

  const similarBands = bands.map((band, index) => (
    <Band key={index} bandName={band.Name} />
  ));

  return (
    <div>
      {loading && !error ? <Loading /> : similarBands}
      {error && <Error error={error} />}
    </div>
  );
};

export default SimilarBands;
