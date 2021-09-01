import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

// Components
import Filter from "../Filter";
import Spinner from "../Spinner/index";
import Card from "../Card";

// Hooks
import useRadio from "../../hooks/useRadio";

// CSS
import "react-h5-audio-player/lib/styles.css";

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
  const [stationFilter, setStationFilter] = useState("all");
  const { dataStations, isLoading } = useRadio(stationFilter);

  return (
    <div className="radio">
      {!isLoading && <Spinner />}
      <div className="filters" style={{ display: !isLoading && "none" }}>
        {filters.map((filter) => (
          <Filter
            key={filter}
            station={stationFilter}
            filter={filter}
            onClick={() => setStationFilter(filter)}
          />
        ))}
      </div>
      <div className="stations" style={{ display: !isLoading && "none" }}>
        {isLoading &&
          dataStations.map((station) => (
            <Card
              key={station.changeId}
              name={station.name}
              favicon={station.favicon}
              audio={station.urlResolved}
            />
          ))}
      </div>
    </div>
  );
};

export default Radio;
