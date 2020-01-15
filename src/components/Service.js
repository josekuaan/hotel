import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from "react-icons/fa"
import Title from "./Title"

export default class Service extends Component {
    state={
        services:[{
            icon:<FaCocktail />,
            title:"Free cocktail",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei ex ea commodo consequat.sunt in culpa qui officia est laborum"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Shutle Van",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei ex ea commodo consequat.sunt in culpa qui officia est laborum"
        },
        {
            icon:<FaHiking />,
            title:"Free Hiking",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei ex ea commodo consequat.sunt in culpa qui officia est laborum"
        },
        {
            icon:<FaBeer />,
            title:"Strong Beer",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei ex ea commodo consequat.sunt in culpa qui officia est laborum"
        }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
