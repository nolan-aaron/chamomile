import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <SearchBar placeholderText={"Search bands.."} />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
