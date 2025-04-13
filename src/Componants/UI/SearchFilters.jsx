export const SearchFilters = ({ search, setSearch, filter, setFilter, setSortOrder }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortAsc = () => {
    setSortOrder("asc");
  };

  const handleSortDesc = () => {
    setSortOrder("desc");
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <select className="select-section" value={filter} onChange={handleSelectChange}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <button onClick={handleSortAsc}>Asc</button>
      <button onClick={handleSortDesc}>Desc</button>

    </section>
  );
};
