import { useNavigate } from "react-router-dom";

const Band = ({ band }) => {
  const navigate = useNavigate();

  return (
    <span className="me-4">
      <code onClick={() => navigate(`/about/${band}`)}>{band}</code>
    </span>
  );
};

export default Band;