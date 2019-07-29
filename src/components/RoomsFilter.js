import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context'
import Title from '../components/Title'

//get all unque value

const getUnique = (items,value)=>{
    
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomsFilter({rooms}) {
    const context =useContext(RoomContext)
    
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
           } = context

           console.log(breakfast,pets)
           //get unique

           let types = getUnique(rooms,'type');
           //add all
           
           types = ['all',...types];
           
// map to jsx
           types =types.map((item,index)=>{
               return <option value ={item} key={index}>{item}</option>
           })

           let people = getUnique(rooms,'capacity');
          console.log(people)
           people =people.map((item,index)=>{
              
               return <option key={index} value={item}>{item}</ option>
           })
    return (
        <section className="filter-container">
           <Title title="search rooms" />   
           <form className="filter-form">
             <div className="form-group">
              <label htmlFor="type">room type</label>
              <select  name="type" 
              id="type" value={type} 
              onChange={handleChange} className="form-control">{types}</select>     
            </div>
            <div className="form-group">
              <label htmlFor="capacity">Guests</label>
              <select  name="capacity" 
              id="capacity" value={capacity} 
              onChange={handleChange} className="form-control">{people}</select>     
            </div>  
            {/* room price  */}
            <div className="form-group">
              <label htmlFor="price">Room Price $ {price}</label>
              <input type="range" id="price" name="price" 
              min = {minPrice} max={maxPrice} 
              value={price} onChange = {handleChange} 
              className="form-control"/>
              </div>
              <div className="form-group">
              <label htmlFor="size">Room Size</label>
              <div className="size-inputs">
                <input type="number" id="size" name="minSize" 
                 
                value={minSize} onChange = {handleChange} 
                className="form-control"/>
                <input type="number" id="size" name="maxSize" 
                 
                 value={maxSize} onChange = {handleChange} 
                 className="form-control"/>
              </div>
              
              </div>
              <div className="form-group">
                  <div className="single-extra">
                      <input type="checkbox" name="breakfast"  
                      id="breakfast" checked = {breakfast} 
                      onChange={handleChange} />
                      <label htmlFor="breakfast">break fast</label>
                  </div>
                  <div className="single-extra">
                      <input type="checkbox" name="pets"  
                      id="pets" checked ={pets} 
                      onChange={handleChange} />
                      <label htmlFor="pets">pets</label>
                  </div>
              </div>
            </form>  
             </section>
    )
}
