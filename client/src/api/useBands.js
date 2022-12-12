import { useState, useEffect } from "react";

export const useBands = (band) => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBands = async (band) => {
    try {
      const response = await fetch(`/bands/${band}`);
      const data = await response.json();
      setBands(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchBands(band);
  }, [band]);

  return {
    bands,
    loading,
    error,
  };
};
