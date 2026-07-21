import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by city, locality or landmark"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;