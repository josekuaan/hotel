import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link } from "react-router-dom"
import {RoomContext} from "../Context"
import StyledHero from "../components/StyledHero"

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg:defaultBcg
        }
           
    }
   
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context
        
        const room = getRoom(this.state.slug)
        console.log(room)
         if(!room){
             return(
                 <div className="error">
                     <h3>No such room could be found</h3>
                     <Link to="/rooms" className="btn-primary">
                         back to room
                     </Link>
                 </div>
             )
         }
         const {name,description,price,extras,breakfast,images,pets,size,capacity} = room
        
         const [mainImg,...defaultBcg] = images;
         return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room` }>
                    <Link to="/rooms" className="btn-primary">
                        back to room
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                   {defaultBcg.map((item,index)=>{
                       return <img key={index} src={item} alt={name} />
                   })}
                </div>
                <div className="single-room-info">
                   <article  className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                    </article> 
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price:${price}</h6>
                        <h6>Size: ${size} SQFT</h6>
                        <h6>
                         max capacity : {
                             capacity > 1 ? `${capacity} people`: `${capacity} person`
                         }
                        </h6> 
                        <h6>{ pets ? "pest allowed": "no pet allowed"}</h6>
                        <h6> {breakfast && "free breakfast included" }</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
