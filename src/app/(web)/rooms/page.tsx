'use client'

import { getRooms } from "@/libs/apis";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from 'swr';
import { Room } from "@/models/room";
import Search from '@/components/Search/Search';
import RoomCard from "@/components/RoomCard/RoomCard";


const Rooms = () => {
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() =>{
        const searchQuery = searchParams.get("searchQuery");
        const roomType = searchParams.get("roomType");
        //console.log(searchQuery, roomType);

        if(roomType) setRoomTypeFilter(roomType);
        if(searchQuery) setSearchQuery(searchQuery);
    },[searchParams])


    async function fetchData(){
      return getRooms();
    }

    const {data, error, isLoading}  = useSWR('get/hotelRooms',fetchData);
    //console.log(data);

    if(error) throw new Error("cannot fetch data");
    if(typeof data === 'undefined' && !isLoading) throw new Error('cannot fetch data');
    
    
    const filteredRooms = (rooms: Room[]) =>{
      return rooms.filter(room =>{
        //apply room type filter
        if(
          roomTypeFilter && 
          roomTypeFilter.toLowerCase()!== 'all' && 
          room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
        ){
          return false;

      }
      //apply search query filter

      if(searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())){
        return false
      }

      return true;
    

    })
  }

  const filteredrooms = filteredRooms(data || []);

  

    
  return (
    <div className="container mx-auto pt-10">
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex mt-20 justify-between flex-wrap">
        {filteredrooms.map(room => 
          <RoomCard key={room._id} room={room} />
        )}
      </div>

    </div>
  )
}

export default Rooms;
