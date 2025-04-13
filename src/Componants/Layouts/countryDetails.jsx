import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { Loader } from "../UI/Loader";
import { getCountryInd } from "../../api/postApi";

export const CountryDetails=()=>{
    const {id}=useParams();
    const [isPending, startTransition] = useTransition();
      const [country, setCountry] = useState();
    
      useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getCountryInd(id);
                if (res.status === 200 && res.data.length > 0) {
                    // console.log(res.data[0])
                    setCountry(res.data[0]);
                    // console.log(country)
                }
            } catch (error) {
                console.error("Failed to fetch country:", error);
            }
        });
    }, [id]);
    
    if (isPending || !country) return <Loader />;

    return <section className="country-details-card ">
        <p className="container welcome">You're now exploring <b><i>{country.name.official}</i></b>, a place full of life, heritage, and inspiration.</p> <br /><br />
            <div className="container container-card ">
                <div className="country-image ">
                    <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
                </div>
                <div className="country-content">
                    <div className="infoContainer">
                        <p className="card-title">{country.name.official}</p>
                        <p>
                            <span className="card-description">Native Names: </span>
                            {Object.keys(country.name.nativeName)
                            .map((key)=>country.name.nativeName[key].common).join(", ")
                            }
                        </p>
                        <p>
                            <span className="card-description">Population: </span>
                            {country.population.toLocaleString()}
                        </p>
                        <p>
                            <span className="card-description">Region: </span>
                            {country.region}
                        </p>
                        <p>
                            <span className="card-description">Subregion: </span>
                            {country.Subregion}
                        </p>
                        <p>
                            <span className="card-description">Capital: </span>
                            {country.capital}
                        </p>
                        <p>
                            <span className="card-description">Top Level Domain: </span>
                            {country.tld[0]}
                        </p>
                        <p>
                            <span className="card-description">Currencies: </span>
                            {Object.keys(country.currencies).map((currElem) => country.currencies[currElem].name).join(", ")}
                        </p>
                        <p>
                            <span className="card-description">Languages: </span>
                            {Object.keys(country.languages).map((key) => country.languages[key]).join(", ")}
                        </p>
                    </div>
                </div>
            </div>
            <NavLink to="/country">
                <button type="submit">Back</button>
            </NavLink>
    </section>
   
}