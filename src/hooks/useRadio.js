import { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";

const useRadio = (stationFilter = "all") => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataRadio = async (stationFilter) => {
    const api = new RadioBrowserApi("My Radio App");

    const res = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      });

    return res;
  };

  useEffect(() => {
    setLoading(false);
    fetchDataRadio(stationFilter).then((data) => {
      setLoading(true);
      setStations(data);
    });
  }, [stationFilter]);

  return { dataStations: stations, isLoading: loading };
};

export default useRadio;
