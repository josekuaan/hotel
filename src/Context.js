import React, { Component } from 'react'

// import items from "./data"
import Client from "./contentful"


//context

const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state ={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
//gettinf data from source

// from contentful

getData = async () =>{
    try{
        let response = await Client.getEntries({
            content_type:'hotelManagement',
            order: '-fields.price'
        })
        console.log(response)
        const rooms = this.forMatData(response.items)
       
        const featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item =>item.price))
        let maxSize = Math.max(...rooms.map(item =>item.size))

        this.setState({
                rooms:rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
                
        })
       
    }catch(err){
        console.log(err)
    }
}

    componentDidMount(){
        this.getData()
        
    };

    forMatData(items){
        const temItem=items.map(item =>{
            const id = item.sys.id;

            const images=item.fields.images.map(image => image.fields.file.url)
            const room = {...item.fields,images,id}
            return room
        })
        
        return temItem;
    }

    getRoom = (slug)=>{
        
        // console.log(slug)
        let tempRooms = [...this.state.rooms];
        
        const room = tempRooms.find(room => room.slug === slug )
        
        return room
    }
    handleChange = event =>{
        const {name,value,type,checked} = event.target
        type === "checkbox" ? this.setState({ [name] : checked },this.filterRooms): this.setState({
            [name] : value
        },this.filterRooms) 
        console.log(type,checked,name,value)
        
    };
    filterRooms = ()=>{
        let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state;
     console.log(breakfast," break")
        //all the rooms
        let tempRooms = [...rooms];
        // transform value

        capacity = parseInt(capacity)
        price = parseInt(price)

        // filter by type
      if(type !=="all"){
          tempRooms = tempRooms.filter(room => room.type ===type)
      console.log( tempRooms)
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
        //filter by size

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
     

        // filter by breakfast
        if(breakfast){
            console.log("okk")
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        // filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        this.setState({
          sortedRooms:tempRooms
      })
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom:this.getRoom.bind(this),
                handleChange : this.handleChange.bind(this)
                }}>
               {this.props.children}
            </RoomContext.Provider>
                
            
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer >
            {value => <Component {...props} context = {value}/>}
          </RoomConsumer>
    }
}

export  {RoomProvider,RoomConsumer,RoomContext}
