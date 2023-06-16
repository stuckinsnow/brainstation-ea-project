import { Link } from "react-router-dom";
import "./HeaderNav.scss";
import logo from "../../assets/logo/logo.png";
import navIcon from "../../assets/icons/uiw_down.png";

function HeaderNav() {
  return (
    <header>
      <div className="header">
        <div className="header__icons"></div>
        <div className="header__links">
          <div className="header__logo">
            <img src={logo} alt="Apex Legends Logo" />
          </div>
          <div className="header__nav">
            <nav className="header__nav">
              <div className="header__nav--drop-down">
                <Link to="/">About</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/about">Moes</Link>
                <img src={navIcon} alt="" />
              </div>

              <Link to="/users">Season</Link>
              <Link to="/contact">Battlepass</Link>

              <div className="header__nav--drop-down">
                <Link to="/about">News & Media</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/users">Community</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/contact">Complete</Link>
                <img src={navIcon} alt="" />
              </div>
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
