import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Service from "../components/Service"
import FeaturedRoom from "../components/FeaturedRooms"

const Home = () => {
    return (
        <div>
            {/* we can ignore to pass since we have set it as 
            default in heros component this hero="defaultHero" 
            */}

            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms  starting at $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Service />
            <FeaturedRoom />
            
        </div>
    )
}

export default Home
