import { FaArrowRight } from "react-icons/fa";

export const HeroSection=()=>{
    return(
    <main>
        <div className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Explore the World, One Country at a Time</h1>
                    <p className="paragraph">Discover the history, culture, and beauty of each country. Easily search, sort, and filter through nations to find detailed information tailored to your interests and needs in just a few clicks.</p>
                    <button className="btn btn-darken btn-inline bg-white-box"> Start Exploring <FaArrowRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/image/world.png" alt="image" className="banner-image" />
                </div>
            </div>
        </div>
    </main>
    )
};