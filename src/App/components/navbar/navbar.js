//Internal Imports
import signOutUsers from "../FirebaseAuthentication/signOutUsers";

const Navbar = () => {

  const signOutUser = (e) => {
    e.preventDefault()
    signOutUsers();
  }

  return (
    <div className="navbar-header">
      <h1>
        <span className="highlight-color">r6</span>stats
      </h1>
      <ul className="navbar-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/leader-board">Leaderboards</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <div className = "logout-btn-wrapper">
          <button className="logout-btn" onClick={(e)=>signOutUser(e)}>Sign Out</button>
          </div> 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
