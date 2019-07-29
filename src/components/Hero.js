import React from 'react'

const Hero = ({children,hero}) => {
    return (
        <header className={hero} >{children}</header>
    )
}

// setting a default props
//so any time we import Hero component and did not pass this default props we still have the defayltHero

Hero.defaultProps = {
    hero:"defaultHero"
}

export default Hero
