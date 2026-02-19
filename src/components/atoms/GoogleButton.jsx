import GoogleLogo from "../../assets/google-logo.png"
function GoogleButton({ text = 'Masuk dengan Akun Google', onClick }) {
    return (
        <button className="google-button" onClick={onClick}>
            <img src={GoogleLogo} alt="Google icon" className="google-icon" />
            {text}
        </button>
    );
}

export default GoogleButton;
