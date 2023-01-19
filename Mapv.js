// import * as React from "react";
// import { useState, useMemo } from "react";
// import { render } from "react-dom";
// import Map, {
//   Marker,
//   Popup,
//   NavigationControl,
//   FullscreenControl,
//   ScaleControl,
//   GeolocateControl,
// } from "react-map-gl";

// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import {Card,CardMedia,CardContent} from '@mui/material';

// import Pin from "./Pin";
// import data from "./Data1";

// const TOKEN =
//   "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here

// export default function Mapv() {
//   const [popupInfo, setPopupInfo] = useState(null);

//   const pins = useMemo(
//     () =>
//       data.map((city, index) => (
//         <Marker
//           key={`marker-${index}`}
//           longitude={Number(city.geo_long)}
//           latitude={Number(city.geo_lat)}
//           anchor="top"
//           onClick={(e) => {
//             // If we let the click event propagates to the map, it will immediately close the popup
//             // with `closeOnClick: true`
//             e.originalEvent.stopPropagation();
//             setPopupInfo(city);
//           }}
//         >
//           <Pin />
//         </Marker>
//       )),
//     []
//   );

//   return (
//     <>
//       {/* <div>Markers and Popups</div> */}
//       <Map
//         initialViewState={{
//           latitude: 25.77797080193535,
//           longitude: 86.06783654890093,
//           zoom: 3.5,
//           bearing: 0,
//           pitch: 0,
//         }}
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapboxAccessToken={TOKEN}
//       >
//         <GeolocateControl position="top-left" />
//         <FullscreenControl position="top-left" />
//         <NavigationControl position="top-left" />
//         <ScaleControl />

//         <div>Markers and Popups</div>

//         {pins}

//         {popupInfo && (
//           <Popup
//             // style={{width:'50%', height:'60%'}}
//             anchor="top"
//             longitude={Number(popupInfo.geo_long)}
//             latitude={Number(popupInfo.geo_lat)}
//             onClose={() => setPopupInfo(null)}
//           >
//             <div>{popupInfo.ofc_zone}| </div>
//             <div>{popupInfo.cons_vill_name}</div>
//             <div>{popupInfo.ocr_md_status}</div>
//             <img
//               width="50%"
//               height="50%"
//               src={popupInfo.rdng_img}
//               alt="popup"
//             />
//           </Popup>
//         )}
//       </Map>
//     </>
//   );
// }

// export function renderToDom(container) {
//   render(<Mapv />, container);
// }








import axios from "axios";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { render } from "react-dom";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import data from "./Data1";
import Pin from "./Pin";


export default function Mapv() {
  const TOKEN =
    "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here
  const [popupInfo, setPopupInfo] = useState();

  const pins = useMemo(
    () =>
      data.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={Number(city.geolong)}
          latitude={Number(city.geolat)}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup// 
            // with `closeOnClick: true` 
            e.originalEvent.stopPropagation();setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  return (
    <>
      <Map
        initialViewState={{
          latitude: 25.77797080193535,
          longitude: 86.06783654890093,
          zoom: 3.5,
          bearing: 0,
          pitch: 0,
          position: "absolute",
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
      >
        {pins}

        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {popupInfo && (

          <Popup
            anchor="top"
            longitude={Number(popupInfo.geolong)}
            latitude={Number(popupInfo.geolat)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.bl_area_code}, {popupInfo.ofc_zone} | ,{" "}
              {popupInfo.mr_unit}
            </div>
            <img width="100%" src={popupInfo.rdng_img} alt="popup" />
          </Popup>
        )}
      </Map>
    </>
  );
}
export function renderToDom(container) {
  render(<Mapv/>, container);
}
