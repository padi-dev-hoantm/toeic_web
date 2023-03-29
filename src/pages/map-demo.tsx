import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE";

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

export default function Map() {
  const loaded = useRef(false);
  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }
  const listOption = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  const placeInputRef = useRef(null);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    initPlaceAPI();
  }, []);

  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    if (!(window as any).google) return;

    let autocomplete = new (window as any).google.maps.places.Autocomplete(
      placeInputRef.current,
      listOption
    );
    new (window as any).google.maps.event.addListener(
      autocomplete,
      "place_changed",
      function () {
        let place = autocomplete.getPlace();
        setPlace(place);
      }
    );
  };
  console.log(111, place);

  return (
    <div>
      <input type="text" ref={placeInputRef} />
      {place && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div style={{ marginBottom: 10 }}>
            <b>Selected Place</b>
          </div>
          <div>
            <b>Address:</b> {place}
          </div>
          {/* <Autocomplete
            id="google-map-demo"
            sx={{ width: 300 }}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.description
            }
            filterOptions={(x) => x}
            options={place}
            autoComplete
            includeInputInList
            filterSelectedOptions
            noOptionsText="No locations"
            onChange={(event: any, newValue: PlaceType | null) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setPlace(place);
            }}
          /> */}
        </div>
      )}
    </div>
  );
}
