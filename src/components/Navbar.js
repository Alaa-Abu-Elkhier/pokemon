import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Pokemon App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/userPokemon"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Your Pokemon
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
