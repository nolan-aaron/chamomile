export const getIndex = async (req, res) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};