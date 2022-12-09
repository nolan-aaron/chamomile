import axios from "axios";

export const getTopTracks = async (req, res) => {
  const band = req.params.band;
  const numResults = 5;
  const token = process.env.LASTFM_API;
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${band}&limit=${numResults}&format=json&api_key=${token}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
