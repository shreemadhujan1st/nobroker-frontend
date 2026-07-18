import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by city, locality or landmark"
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;