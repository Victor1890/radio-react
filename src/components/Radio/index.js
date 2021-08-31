import { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import Filter from "../filter/index";
import Spinner from "../spinner";
import imgDefault from "../../radio.jpg";

const filters = [
  "all",
  "classical",
  "country",
  "dance",
  "disco",
  "house",
  "jazz",
  "pop",
  "rap",
  "retro",
  "rock",
];

const Radio = () => {
  const [loading, setLoading] = useState(false);
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  const fetchDataRadio = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      })
      .catch(() => setLoading(false));

    return stations;
  };

  useEffect(() => {
    setLoading(false);
    fetchDataRadio(stationFilter).then((data) => {
      setLoading(true);
      setStations(data);
    });
  }, [stationFilter]);

  return (
    <div className="radio">
      {!loading && <Spinner />}
      <div className="filters" style={{ display: !loading && "none" }}>
        {filters.map((filter) => (
          <Filter
            key={filter}
            station={stationFilter}
            filter={filter}
            onClick={() => setStationFilter(filter)}
          />
        ))}
      </div>
      <div className="stations" style={{ display: !loading && "none" }}>
        {stations &&
          stations.map((station) => (
            <div className="station" key={station.changeId}>
              <div className="stationName">
                <img
                  className="logo"
                  src={station.favicon}
                  alt="station logo"
                  onError={(event) => {
                    event.target.src = imgDefault;
                  }}
                />
                <div className="name">{station.name}</div>
              </div>

              <AudioPlayer
                className="player"
                src={station.urlResolved}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Radio;
