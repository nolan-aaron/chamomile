import { useTopTracks } from "../hooks/useTopTracks";
import { useParams } from "react-router-dom";
import Tracks from "./Tracks";
import Loading from "./Loading";

const BandAbout = () => {
  const { band } = useParams();
  const { tracks, loading } = useTopTracks(band);

  return (
    <div className="p-3">
      <Loading isLoading={loading} />
      <Tracks tracks={tracks} />
    </div>
  );
};

export default BandAbout;
