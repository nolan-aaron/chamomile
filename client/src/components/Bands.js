import Band from "./Band.js";

const Bands = ({ bands }) =>
  bands.map((band, index) => <Band key={index} band={band.Name} />);

export default Bands;
