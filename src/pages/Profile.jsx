import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../Beranda.css";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // render
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            navigate("/");
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const handleChangePassword = () => {
        if (!newPassword || !confirmPassword) {
            alert("Kata sandi baru harus diisi.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("Konfirmasi kata sandi tidak cocok.");
            return;
        }
        if (!isValidPassword(newPassword)) {
            alert("Kata sandi harus minimal 8 karakter, mengandung huruf besar, angka, dan simbol.");
            return;
        }

        // buat jika misalnya pake akun yang beda
        const updatedUser = { ...user, password: newPassword };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        alert("Kata sandi berhasil diperbarui!");
        navigate("/home");
    };

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    return (
        <div className="container">
            <h2>Profil</h2>
            {user && <p><strong>Username:</strong> {user.username}</p>}
            <div className="form_group">
                <label>Kata Sandi Baru</label>
                <input className="form_input"
                    type="password"
                    placeholder="Masukkan kata sandi baru"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="form_group">
                <label>Konfirmasi Kata Sandi</label>
                <input className="form_input"
                    type="password"
                    placeholder="Konfirmasi kata sandi baru"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button className="form_button" onClick={handleChangePassword}>
                Ubah Kata Sandi
            </button>
        </div>
    );
};

export default Profile;
