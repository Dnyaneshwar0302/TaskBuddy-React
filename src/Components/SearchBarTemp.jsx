import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-card">

      <div className="search-icon">
        🔍
      </div>

      <input
        type="text"
        placeholder="Search your tasks..."
      />

    </div>
  );
}

export default SearchBar;