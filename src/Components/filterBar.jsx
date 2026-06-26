import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filter-card">

      <div className="filter-title">
        <h2>Filter Tasks</h2>
        <p>Quickly organize your tasks</p>
      </div>

      <div className="filter-options">

        <div className="filter-item">
          <label>Priority</label>
          <select>
            <option>All</option>
            <option>🔴 High</option>
            <option>🟡 Medium</option>
            <option>🟢 Low</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Category</label>
          <select>
            <option>All</option>
            <option>💻 Coding</option>
            <option>📚 Study</option>
            <option>💼 Career</option>
            <option>🏃 Personal</option>
            <option>🛒 Shopping</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Status</label>
          <select>
            <option>All</option>
            <option>✅ Completed</option>
            <option>⏳ Pending</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Sort By</label>
          <select>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Priority</option>
            <option>Due Date</option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default FilterBar;