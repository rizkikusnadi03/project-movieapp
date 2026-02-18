import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Chill Movie</div>
            <div className="navbar-links">
                <Link to="/dashboard">Home</Link>
                <Link to="/profile">Profile</Link>
                <button onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    window.location.href = '/';
                }}>Logout</button>
            </div>
        </nav>
    );
};

export default NavBar;
