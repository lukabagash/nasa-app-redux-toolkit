import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import store from "./redux/store";
import Photo from "./pages/Photo";
import Galery from "./pages/Galery";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/photo" element={<Photo />} />
            <Route path="/random" element={<Random />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
