import Band from "./Band.js";
import Loading from "./Loading.js";
import Error from "./Error.js";
import { useBands } from "../api/useBands.js";

const Bands = (props) => {
  const { bands, loading, error } = useBands(props.band);
  const listOfBands = bands.map((band, index) => (
    <Band key={index} name={band.Name} />
  ));

  return (
    <div>
      {loading && !error ? <Loading /> : listOfBands}
      {error && <Error error={error} />}
    </div>
  );
};

export default Bands;
