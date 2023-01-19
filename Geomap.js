import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
// import { Source, Layer} from 'react-map-gl';
import type { LayerProps } from "react-map-gl";

import Map, {
  Marker,
  Source, 
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import data from './Data1';

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here

const pointLayer: LayerProps = {
  id: "point",
  type: "circle",

  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

function pointOnCircle({ center, angle, radius }) {
  return {
    type: "Point",

    coordinates: [
      center[0] + Math.cos(angle) * radius,
      center[1] + Math.sin(angle) * radius,
    ],
  };
}

export default function Geomap() {
  const [pointData, setPointData] = useState(null);

  useEffect(() => {
    const animation = window.requestAnimationFrame(() =>
      setPointData(
        pointOnCircle({
          center: [86.18354561966235, 25.759238821702603],
          angle: Date.now() / 1000,
          radius: 0.5,
        })
      )
    );

    return () => window.cancelAnimationFrame(animation);
  });

  return (
    <>
      <Map
        initialViewState={{
          latitude: 25.77797080193535,
          longitude: 86.06783654890093,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />

        <ScaleControl />

        {pointData && (
          <Source type="geojson" data={pointData}>
            <Layer {...pointLayer} />
          </Source>
        )}
      </Map>
    </>
  );
}

export function renderToDom(container) {
  render(<Geomap />, container);
}
