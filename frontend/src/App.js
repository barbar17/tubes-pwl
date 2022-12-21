import React from "react";
import { Outlet, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./AppComponents/Navigation/Navigation";
import Footer from "./AppComponents/Footer";
import { AuthContext } from "./Function/AuthContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const tipeakun = user?.tipeakun;

  const [authState, setAuthState] = useState(false);

  const userToken = sessionStorage.getItem("token");

  const checkToken = async (token) => {
    await axios
      .get("http://localhost:5000/users", {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setUser(response.data);
          setAuthState(true);
        }
      });
  };

  useEffect(() => {
    checkToken(userToken);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="App">
        <div className="flex flex-col w-full scrollbar">
          <AuthContext.Provider value={{ tipeakun }}>
            <Navigation tipeakun={user?.tipeakun} />
          </AuthContext.Provider>

          <Outlet />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
