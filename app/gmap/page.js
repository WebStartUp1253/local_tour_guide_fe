"use client"
import React from 'react'
import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';


export default function Page() {

  const myHome = {
    lat: 23.195992181434057,
    lng: 88.09567972485108
  }
  return (
    <APIProvider apiKey={'AIzaSyAF5PF39kVNNf9SVpEeNiInBH__wC9ZAhA'}>
    <Map
      mapId='7e390e9bf0ef3af4'
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 23.195992181434057, lng: 88.09567972485180}}
      defaultZoom={6}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      <AdvancedMarker position={{lat: 23.195992181434057, lng: 88.09567972485180}}>
        <Pin background='white' borderColor='blue' glyphColor='red' />
      </AdvancedMarker>
    </Map>
  </APIProvider>
  )
}
// 23.195992181434057, 88.09567972485108