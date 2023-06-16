import { Link } from 'react-router-dom';

function HeaderNav(){
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default HeaderNav;