// import axios from "axios";
// import * as React from "react";
// import { useRef, useState, useEffect } from "react";
// import { render } from "react-dom";

// // import {Source, Layer} from 'react-map-gl';

// import Map, {
//   NavigationControl,
//   FullscreenControl,
//   Source,
//   Layer,
//   ScaleControl,
//   GeolocateControl,
// } from "react-map-gl";

// // import MapboxGl from 'react-map-gl/dist/esm/mapbox/mapbox';

// import MapboxGl from "mapbox-gl";

// import type { MapRef, GeoJSONSource } from "react-map-gl";

// import {
//   clusterLayer,
//   clusterCountLayer,
//   unclusteredPointLayer,
// } from "./Clusterlayer";

// // import data from "./Data1";

// export default function Cluster() {
//   const MAPBOX_TOKEN =
//     "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here

//   const mapRef = useRef (MapboxGl.Map);

//   // const mapRef: Type = React.useRef(null);

//   const [data, setData] = useState(null);

//   const onClick = (bihar) => {
//     const meter = bihar.results[0];

//     console.log("meter", meter);

//     const clusterId = meter.results.cluster_id;

//     // console.log("clusterId",clusterId);

//     const mapboxSource = mapRef.current.getSource("clusters");

//     mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
//       if (err) {
//         return err;
//       }

//       mapRef.current.easeTo({
//         center: meter.geo_lat,

//         zoom,

//         duration: 500,
//       });
//     });
//   };
//   const plutoUrl = 'http://192.168.0.118:8005/clusters';
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await axios.get("http://192.168.0.118:8005/clusters");

        
//         getData();



//         // // const response = await axios.get("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson");


//         // console.log("response12-------------", response.data);

//         // setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);


//   async function getData () {
    
//     setData({"type": "FeatureCollection", "features": []})
//     await fetch(plutoUrl)
//    .then(response => response.json())
//    .then(data => { 

//     console.log("data>",data);
//     data.map((point,id)=>{
//       return (

//         const  coordinate = [parseFloat(point.geo_long), parseFloat(point.geo_lat)]
//       ) 
//     })

//     // for(const point of data){

//     //   const  coordinate = [parseFloat(point.geo_long), parseFloat(point.geo_lat)];
//     //   console.log("data9",coordinate,point.geo_long);
//     //   const properties = point;
//     //   delete properties.longitude;
//     //   delete properties.latitude;          
//     //   const feature = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coordinate}, "properties": properties}

//     // }

    
//    })
//    };
//    console.log(data);
 

//   return (
//     <>
//       <Map
//         // rest of the map configuration

//         initialViewState={{
//           latitude: 25.77797080193535,
//           longitude: 86.06783654890093,
//           zoom: 3,
//         }}
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapboxAccessToken={MAPBOX_TOKEN}
//         interactiveLayerIds={[clusterLayer.id]}
//         onClick={onClick}
//         ref={mapRef}
//       >
//         {data && (
//           <Source
//             id="clusters"
//             type="geojson"
//             data={data}
//             cluster
//             clusterMaxZoom={14}
//             clusterRadius={50}
//           >
//             <Layer {...clusterLayer} />

//             <Layer {...clusterCountLayer} />

//             <Layer {...unclusteredPointLayer} />
//           </Source>
//         )}
//       </Map>
//     </>
//   );
// }





// // =====



  


// // ===


// =================================================================================================================
import axios from "axios";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { render } from "react-dom";


// import {Source, Layer} from 'react-map-gl';

import Map, {
  NavigationControl,
  FullscreenControl,
  Source,
  Layer,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

// import MapboxGl from 'react-map-gl/dist/esm/mapbox/mapbox';

import MapboxGl from "mapbox-gl";

import type {MapRef, GeoJSONSource} from "react-map-gl";

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./Clusterlayer";

// import data from "./Data1";

export default function Cluster() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here

  const mapRef = useRef (MapboxGl.Map);

  // const mapRef: Type = React.useRef(null);

  const [data, setDataa] = useState(null);

  const onClick = (bihar) => {
    const meter = bihar.results[0];

    console.log("meter", meter);

    const clusterId = meter.results.cluster_id;

    // console.log("clusterId",clusterId);

    const mapboxSource = mapRef.current.getSource("clusters");

    mapboxSource.getClusterExpansionZoom(clusterId, (err,zoom) => {
      if (err) {
        return err;
      }

      mapRef.current.easeTo({
        center: meter.geo_lat,
        zoom,
        duration: 500,
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.0.219:8000/geocluster");

        // const response = await axios.get("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson");


        console.log("response12-------------", response.data);

        setDataa(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Map
        // rest of the map configuration

        initialViewState={{
          latitude: 25.77797080193535,
          longitude: 86.06783654890093,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        {data && (
          <Source
            id="clusters"
            type="geojson"
            data={data}
            cluster
            clusterMaxZoom={15}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        )}
      </Map>
    </>
  );
}
