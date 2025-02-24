"use client";
import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  Marker,
} from "@vis.gl/react-google-maps";

export default function Page() {
  const nabadwipTemples = [
    {
      key: "fsdg",
      geoLocation: {
        lat: 23.425716387317536,
        lng: 88.38889886925423,
      },
    },
    {
      key: "gsdggs",
      geoLocation: {
        lat: 23.42280147593138,
        lng: 88.37151840810824,
      },
    },
    {
      key: "gsdgge",
      geoLocation: {
        lat: 23.850989,
        lng: 86.884871,
      },
    },
  ];
  const myHome = {
    lat: 23.195992181434057,
    lng: 88.09567972485108,
  };
  console.log("nabadwipTemples:: ", nabadwipTemples[0].geoLocation);
  const geoLoc = nabadwipTemples[0].geoLocation;
  console.log("geoLoc::: ", geoLoc);
  return (
    <div style={{ height: "380px", width: "600px" }}>
      
      <APIProvider apiKey={"AIzaSyAF5PF39kVNNf9SVpEeNiInBH__wC9ZAhA"}>
        <Map
          mapId="7e390e9bf0ef3af4"
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 23.195992181434057, lng: 88.0956797248518 }}
          defaultZoom={6}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Markers points={nabadwipTemples} />

        </Map>
      </APIProvider>
    </div>
  );
}

const Markers = ({ points }) => {
  console.log("points----->  ", points);
  return (
    <>
      {points.map((point) => 
        <AdvancedMarker position={point.geoLocation} key={point.key}>
          <span style={{fontSize: '25px' }}>🛕</span>
        </AdvancedMarker>
      )}
    </>
  );
};
