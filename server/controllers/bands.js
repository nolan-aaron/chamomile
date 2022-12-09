import axios from "axios";

export const getSimilarBands = async (req, res) => {
  const bandName = req.params.bandName;
  const searchType = "music";
  const numResults = 30;
  const token = process.env.TASTEDIVE_API;
  const url = `https://tastedive.com/api/similar?q=${bandName}&type=${searchType}&limit=${numResults}&k=${token}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};