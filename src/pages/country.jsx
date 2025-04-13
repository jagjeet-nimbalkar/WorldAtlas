import { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/postApi";
import { Loader } from "../Componants/UI/Loader";
import { CountryCard } from "../Componants/Layouts/countryCard";
import { SearchFilters } from "../Componants/UI/SearchFilters";

export default function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (!search) return true;
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };

  const filterRegion = (country) => {
    if (filter === "All") return true;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  const sortedCountries = [...filterCountries].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  return (
    <section className="country-section">
      <h2 className="container-title">
        Explore the Wonders
        <br />
        of Every Country Worldwide
      </h2>

      <SearchFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setSortOrder={setSortOrder}
      />

      <ul className="grid grid-four-cols">
        {sortedCountries.map((corrCountry, index) => (
          <CountryCard country={corrCountry} key={index} />
        ))}
      </ul>
    </section>
  );
}
