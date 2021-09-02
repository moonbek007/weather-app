import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./utils/redux";
import Window from "./components/Window";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Window />
      </Provider>
    </div>
  );
}

export default App;
