import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = ({ placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchTerm.toLowerCase()}`);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        onChange={handleChange}
        value={searchTerm}
        placeholder={placeholderText}
        type="search"
        aria-label="Search"
        className="me-2"
      />
      <Button variant="outline-dark" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;