import React from "react";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios, { API_KEY } from "../utils/axios";
import { useDispatch } from "react-redux";

function SearchSection() {
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(
        `weather?q=${inputRef.current.childNodes[1].childNodes[0].value}&appid=${API_KEY}`
      )
      .then((resp) => {
        console.log(resp.data);
        dispatch({ type: "SET_CITY", payload: resp.data });
        inputRef.current.childNodes[1].childNodes[0].value = "";
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="window__side-panel__search-section">
      <TextField
        className="window__side-panel__search-section__search-field"
        label="Another Location"
        style={{ margin: "1rem" }}
        ref={inputRef}
      />
      <Button
        size="large"
        startIcon={
          <SearchIcon className="window__side-panel__search-section__search-button" />
        }
        onClick={handleClick}
      />
    </section>
  );
}

export default SearchSection;
