import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Wedding from "./pages/Wedding/Wedding";
import Prewedding from "./pages/Prewedding/Prewedding";
import Potrait from "./pages/Potrait/Potrait";
import About from "./pages/About/About";
import Package from "./pages/Package/Package";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Progress from "./pages/Progress/Progress";
import Payment from "./pages/Payment/Payment";

import Admin from "./Admin/Admin";
import Pesanan from "./Admin/Pesanan/Pesanan";
import AdminPackage from "./Admin/Package/AdminPackage";
import EditPackage from "./Admin/Package/EditPackage";
import Additional from "./Admin/Additional/Additional";
import EditAdditional from "./Admin/Additional/EditAdditional";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<App />}>
          <Route path="" element={<Homepage />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="prewedding" element={<Prewedding />} />
          <Route path="potrait" element={<Potrait />} />
          <Route path="about" element={<About />} />
          <Route path="package" element={<Package />} />
          <Route path="progress" element={<Progress />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path='admin' element={<Admin />}>
          <Route path='pesanan' element={<Pesanan />} />
          <Route path='paket' element={<AdminPackage />} />
          <Route path='paket/edit' element={<EditPackage />} />
          <Route path='additional' element={<Additional />} />
          <Route path='additional/edit' element={<EditAdditional />} />
        </Route>

        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
