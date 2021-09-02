import React from "react";
import MainWindow from "./MainWindow";
import SidePanel from "./SidePanel";
import "../css/window.css";
import axios, { API_KEY } from "../utils/axios";
import { useDispatch } from "react-redux";

function Window() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get(`weather?q=London&appid=${API_KEY}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch({ type: "SET_CITY", payload: resp.data });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="window">
      <MainWindow />
      <SidePanel />
    </main>
  );
}

export default Window;
