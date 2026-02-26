import { Link } from 'react-router-dom';
import ProfileNav from '../atoms/ProfileNav';
import chillLogo from '../../assets/chill-logo.png';
import '../../Beranda.css';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={chillLogo} alt="Chill Movie" style={{ width: '100%' }} />
                </div>
                <div className="links">
                    <Link to="/home">Beranda</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/movies">Film</Link>
                    <Link to="/new">Daftar Saya</Link>
                    <ProfileNav />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
