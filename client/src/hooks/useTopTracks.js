import { useState, useEffect } from "react";

export const useTopTracks = (band) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTracks = async (band) => {
    try {
      setLoading(true);
      const response = await fetch(`/tracks/${band}`);
      const data = await response.json();
      setTracks(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTracks(band);
  }, [band]);

  return {
    tracks,
    loading,
    error,
  };
};
