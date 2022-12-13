import axios from "axios";

export const getTopTracks = async (req, res) => {
  const band = req.params.band;
  const numResults = 6;
  const token = process.env.LASTFM_API;
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${band}&limit=${numResults}&format=json&api_key=${token}`;

  try {
    const response = await axios.get(url);
    const data = await response.data.toptracks.track;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
