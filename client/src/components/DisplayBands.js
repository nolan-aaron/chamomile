import { useSimilarBands } from "../hooks/useSimilarBands.js";
import { useParams } from "react-router-dom";
import Bands from "./Bands.js";
import Loading from "./Loading.js";

const DisplayBands = () => {
  const { band } = useParams();
  const { bands, loading } = useSimilarBands(band);

  return (
    <div className="p-3">
      <Loading isLoading={loading} />
      <Bands bands={bands} />
    </div>
  );
};

export default DisplayBands;