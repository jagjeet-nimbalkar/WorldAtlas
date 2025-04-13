import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  const truncateCapital = (capitalArray, maxLength = 10) => {
    if (!capitalArray || capitalArray.length === 0) return "N/A";
    const capital = capitalArray[0]; // Just taking the first one if it's an array
    if (capital.length <= maxLength) return capital;
    return capital.slice(0, maxLength) + "...";
  };

  return (
    <li className="country-card card">
      <div className="container-card">
        <img src={flags.svg} alt={flags.alt || `${name.common} flag`} />
        <div className="countryInfo">
          <p className="card-title">{name.common}</p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {truncateCapital(capital)}
          </p>
        </div>
        <NavLink to={`/country/${name.common}`}>
          <button type="button">
            Read More <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
    </li>
  );
};
