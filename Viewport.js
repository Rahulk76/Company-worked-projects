import * as React from "react";
import { useRef, useCallback } from "react";
import { render } from "react-dom";
// import { MapRef } from "react-map-gl";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";


import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl/";
import Select from "@mui/material/Select";

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import {FormControlLabel, Grid, Paper, FormLabel} from '@mui/material';


import ControlPanel from "./Control-panel";

import data from "./Data1";

const MAPBOX_TOKEN = "pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg"; // Set your mapbox token here

const initialViewState = {
  latitude: 25.77797080193535,
  longitude: 86.06783654890093,
  zoom: 11,
  bearing: 0,
  pitch: 0,
};

export default function Viewport() {
//  const mapRef = useRef<MapRef>();
 const map = useRef(Map)

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSelectCity = useCallback(({ geolong, geolat }) => {
    map.current?.flyTo({ center: [geolong, geolat], duration: 2000 });
  }, []);

  return (
    <>
      <Box>
        <FormControl
          sx={{
            mb: 11,
            p: 1,
            marginLeft: "300px",
            width: 150,
            display: "flex",
            textAlign: "center",
          }}
        >
          <InputLabel id="demo-simple-select-label"> </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Meter-Readings"
            onChange={handleChange}
          >
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>Mr_id</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Map
        ref={map}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        <ControlPanel onSelectCity={onSelectCity} />
      </Map>
    </>
  );
}

export function renderToDom(container) {
  render(<Viewport />, container);
}
