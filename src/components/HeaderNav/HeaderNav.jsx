import { Link } from "react-router-dom";
import "./HeaderNav.scss";
import logo from "../../assets/logo/logo.png";
import navIcon from "../../assets/icons/uiw_down.png";


function handleClick() {
  window.location.href = "/";
}


function HeaderNav() {
  return (
    <header>
      <div className="header">
        <div className="header__icons"></div>
        <div className="header__links">
        <div className="header__logo" onClick={handleClick}>
      <img src={logo} alt="Apex Legends Logo" />
    </div>
          <div className="header__nav">
            <nav className="header__nav">
              <div className="header__nav--drop-down">
                <Link to="/botbrawl">About</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/botbrawl">Moes</Link>
                <img src={navIcon} alt="" />
              </div>

              <Link to="/botbrawl">Season</Link>
              <Link to="/botbrawl">Battlepass</Link>

              <div className="header__nav--drop-down">
                <Link to="/botbrawl">News & Media</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/botbrawl">Community</Link>
                <img src={navIcon} alt="" />
              </div>

              <div className="header__nav--drop-down">
                <Link to="/botbrawl">Complete</Link>
                <img src={navIcon} alt="" />
              </div>
            </nav>
          </div>
          <div className="header__btn">
          <button onClick={() => { window.location.href = '/botbrawl'; }}>Train your bot</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
