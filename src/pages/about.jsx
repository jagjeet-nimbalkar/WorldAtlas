import countryFacts from "../api/countryData.json"

export default function About(){
    return <section className="section-about container">
        <h2 className="container-title">Here are the interesting facts<br />we're proud of</h2>
        <div className="gradient-cards">
            {countryFacts.map((country)=>{
                const {id,name,capital,population,interestingFacts}=country
                    return(
                        <div className="card" key={id}>
                            <div className="container-card bg-blue-box">
                                <p>{name}</p>
                                <p>
                                    <span className="card-description"> Capital:</span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="card-description">Population:</span>
                                    {population}
                                </p><p>
                                    <span className="card-description"> interesting Fact:</span>
                                    {interestingFacts}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
}