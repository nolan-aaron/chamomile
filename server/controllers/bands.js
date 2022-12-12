import axios from "axios";

export const getSimilarBands = async (req, res) => {
  const band = req.params.band;
  const numResults = 30;
  const token = process.env.TASTEDIVE_API;
  const url = `https://tastedive.com/api/similar?q=${band}&type="music"&limit=${numResults}&k=${token}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data.Similar.Results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};