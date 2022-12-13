import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={searchTerm}
        type="search"
        placeholder={placeholderText}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
