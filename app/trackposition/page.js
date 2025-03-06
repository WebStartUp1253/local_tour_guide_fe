import React from 'react'
import getGEOlocation from '@/controller/getGEOlocation';

export default function page() {
   let geoLoc = getGEOlocation();
    console.log('geoLoc::', geoLoc)
    return (
    <div>
        <p>Your current location</p>
        <h5>lat: </h5> 
        <h5>lng: </h5>
    </div>
  )
}
