// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
