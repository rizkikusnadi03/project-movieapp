import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
// import chillLogo from '/src/assets/chill-logo.png';
import GoogleButton from '/src/components/atoms/GoogleButton';
import '../../style.css';

const Forms = ({ type }) => {
    const isLogin = type === 'login';
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('isAuthenticated') === 'true') {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = () => {
        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.setItem("isAuthenticated", "true");
                navigate("/home");
            } else {
                alert("Username atau kata sandi salah.");
            }
        } else {
            if (!username || !password || !confirmPassword) {
                alert("Semua kolom harus diisi.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Konfirmasi kata sandi tidak cocok.");
                return;
            }
            if (!isValidPassword(password)) {
                alert(
                    "Kata sandi harus minimal 8 karakter, mengandung huruf besar, angka, dan simbol."
                );
                return;
            }

            localStorage.setItem("user", JSON.stringify({ username, password }));
            navigate("/");
        }
    };

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };


    return (
        <form className="container" onSubmit={(e) => e.preventDefault()}>
            <div className="screen">
                <div className="screen_title">
                    {/* <img src={chillLogo} alt="CHILL icon" className="chill-icon" /> */}
                    <span className="chill-icon-text">CHILL MOVIE</span>
                </div>
                <h2 id="subtitle1">{isLogin ? 'Masuk' : 'Daftar'}</h2>
                <p id="subtitle2">{isLogin ? 'Selamat datang kembali!' : 'Selamat datang!'}</p>
                <div className="screen_form">
                    <div className="form_group">
                        <label htmlFor="username" className="form_label">Username</label>
                        <input type="text" id="username" className="form_input" placeholder="Masukkan username"
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form_group">
                        <label htmlFor="password" className="form_label">Kata Sandi</label>
                        <input type="password" id="password" className="form_input" placeholder="Masukkan kata sandi"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {!isLogin && (
                        <div className="form_group">
                            <label htmlFor="confirmPassword" className="form_label">Konfirmasi Kata Sandi</label>
                            <input type="password" id="confirmPassword" className="form_input" placeholder="Masukkan konfirmasi kata sandi"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    )}

                    <p className="form_text">
                        {isLogin ? (
                            <>
                                Belum punya akun? <Link to="/register" className="form_link">Daftar</Link>
                                <span><a href="#" className="form_right-align">Lupa kata sandi?</a></span>
                            </>
                        ) : (
                            <>
                                Sudah punya akun? <Link to="/" className="form_link2">Masuk</Link>
                            </>
                        )}
                    </p>

                    <button className="form_button" type="button" onClick={handleSubmit}>{isLogin ? 'Masuk' : 'Daftar'}</button>
                    <p className="atau">Atau</p>
                    <GoogleButton text={isLogin ? 'Masuk dengan Google' : 'Daftar dengan Google'} />
                </div>
            </div>
        </form>
    );
};

export default Forms;
