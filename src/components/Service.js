import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from "react-icons/fa"
import Title from "./Title"

export default class Service extends Component {
    state={
        services:[{
            icon:<FaCocktail />,
            title:"Free cocktail",
            info:"dggjhjsk haishauihjk hjdkhkj hjahghj, bsb,nba vgagjhsag jbajasns bmnmsbanm bsbjkhjk hjksdha jkshbhjjjb,jhj"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Shutle Van",
            info:"dggjhjsk haishauihjk hjdkhkj hjahghj, bsb,nba vgagjhsag jbajasns bmnmsbanm bsbjkhjk hjksdha jkshbhjjjb,jhj"
        },
        {
            icon:<FaHiking />,
            title:"Free Hiking",
            info:"dggjhjsk haishauihjk hjdkhkj hjahghj, bsb,nba vgagjhsag jbajasns bmnmsbanm bsbjkhjk hjksdha jkshbhjjjb,jhj"
        },
        {
            icon:<FaBeer />,
            title:"Strong Beer",
            info:"dggjhjsk haishauihjk hjdkhkj hjahghj, bsb,nba vgagjhsag jbajasns bmnmsbanm bsbjkhjk hjksdha jkshbhjjjb,jhj"
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
