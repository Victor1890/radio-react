import AudioPlayer from "react-h5-audio-player";
import imgDefault from "../../radio.jpg";

const Card = ({ favicon, name, audio }) => (
  <div className="station">
    <div className="stationName">
      <img
        className="logo"
        src={favicon}
        alt="station logo"
        onError={(event) => {
          event.target.src = imgDefault;
        }}
      />
      <div className="name">{name}</div>
    </div>

    <AudioPlayer
      className="player"
      src={audio}
      showJumpControls={false}
      layout="stacked"
      customProgressBarSection={[]}
      customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
      autoPlayAfterSrcChange={false}
    />
  </div>
);

export default Card;
