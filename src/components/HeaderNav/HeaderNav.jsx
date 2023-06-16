import { Link } from "react-router-dom";
import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <header>
      <div className="header">
        <div className="header__icons"></div>
        <div className="header__links">
          <div className="header__logo">
            <img src="" alt="Apex Legends Logo" />
          </div>
          <div className="header__nav">
            <nav className="header__nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="header__btn">
            <button>Train your bot</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
