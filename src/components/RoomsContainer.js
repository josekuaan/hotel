import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomsContainer({context}) {
        console.log(context)
    const {loading,sortedRooms,rooms} = context
    if(loading){
        return <Loading />;
        }
    return(
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
            
        </>
    )
}
export default  withRoomConsumer(RoomsContainer)



// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer >
//             {value => {
//                 const {loading,sortedRooms,rooms} = value;
            
//                 if(loading){
//                     return <Loading />;
//                 }
//             return(
//                 <div>
//                     <RoomsList room={rooms}/>
//                     hello from roomc
//                     <RoomsFilter room={sortedRooms} />
//                 </div>
//             )
//         }}
//         </RoomConsumer>
    
    
//     )
// }
