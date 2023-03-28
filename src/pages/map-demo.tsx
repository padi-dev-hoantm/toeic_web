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
  let autocomplete = { current: null };
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
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);

  const listOption = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  console.log("inputValue", inputValue);

  // useEffect(() => {}, []);
  // const autoCompleteRef = useRef<any>();
  // const inputRef = useRef();
  // const listOptions = {
  //   componentRestrictions: { country: "ng" },
  //   fields: ["address_components", "geometry", "icon", "name"],
  //   types: ["establishment"],
  // };
  const autoCompleteRef = useRef<any>();
  const inputRef = useRef();

  useEffect(() => {
    if (!(window as any).google) return;

    autoCompleteRef.current = new (
      window as any
    ).google.maps.places.Autocomplete(inputRef.current, listOption);

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
    });
  }, []);
  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
}
