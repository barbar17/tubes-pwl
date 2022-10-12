import React from "react";
import { Outlet } from 'react-router-dom';

import Navigation from "./AppComponents/Navigation/Navigation";
import Footer from "./AppComponents/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex flex-col w-full">
          <Navigation />

          <Outlet />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
