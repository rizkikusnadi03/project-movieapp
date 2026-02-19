import muteIcon from '../../assets/mute.png';
import unmuteIcon from '../../assets/unmute.png';

const MuteButton = ({ isMuted, toggleMute }) => {
    return (
        <span className="mute-container" onClick={toggleMute}>
            <img className="mute-button" src={isMuted ? muteIcon : unmuteIcon} alt={isMuted ? "Mute" : "Unmute"} />
        </span>
    );
};

export default MuteButton;