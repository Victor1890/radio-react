import "./styles.scss";

// compoment
import Radio from "./components/Radio";

const App = () => {
  return (
    <div className="App">
      <h1>Super Radio Player</h1>
      <h2>
        Pincha un genero musical, escoje una estación, empieza a escuchar.
      </h2>
      <Radio />
    </div>
  );
};

export default App;
