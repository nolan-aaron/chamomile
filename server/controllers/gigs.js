import axios from "axios";

export const getUpcomingGigs = async (req, res) => {
  const band = req.params.band;
  const sortByMethod = "date,asc";
  const token = process.env.TICKETMASTER_API;
  const url = `https://app.ticketmaster.com/discovery/v2/events?keyword=${band}&classificationName=music&sort=${sortByMethod}&apikey=${token}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
