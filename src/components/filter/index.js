const Filter = ({ station, filter, onClick }) => (
  <span
    className={station === filter ? "selected" : ""}
    key={filter}
    onClick={onClick}
  >
    {filter}
  </span>
);

export default Filter;
