import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not Found">
                   <Link to="/" className="btn-primary">return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error
