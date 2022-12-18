import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsWhatsapp, BsInstagram, BsYoutube, BsLine } from "react-icons/bs";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      console.log(document.cookie);
      const response = await axios.get("http://localhost:5000/token", {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/signin");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        console.log("basing");
        const response = await axios.get("http://localhost:5000/token", { withCredentials: true });
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-10 px-20">
      <button onClick={getUsers}>Halaman Pemesanan</button>
      <h1 className="text-5xl text-gray-400 tracking-wider">About</h1>
      <div className="flex h-[700px] w-full justify-between mb-5">
        <div className="h-full flex flex-col py-10">
          <b className="text-5xl py-5 font-normal tracking-widest">HELLO</b>
          <p className="text-xl">
            In HelloWedding, we believe that wedding should be intimate and personal.
            <br />
            Every artwork that we created is imbued by the dreams and values of the couple that we worked with.
            <br />
            Let us help you painting your perfect moment into a piece that will always be remembered.
          </p>
        </div>
        <div className="h-[700px] w-[600px] bg-red-500">
          <img src="grid1.jpg" alt="aboutfoto" className="h-full w-full object-bottom object-cover" />
        </div>
      </div>

      <h1 className="text-5xl text-gray-400 tracking-wider">Our Studio</h1>
      <div className="flex justify-between min-h-screen">
        <div className="flex flex-col">
          <p className="text-4xl mt-10 mb-5">“We believe that wedding should be intimate and personal”</p>

          <p className="text-3xl mb-20">- HelloWedding Studio Lab</p>

          <div className="flex space-x-2 my-5">
            <MdLocationOn className="text-2xl" />
            <p className="text-xl">
              Jl. Melati No.1, Rw. Laut, Kec. Tanjungkarang Timur
              <br />
              Kota Bandar Lampung, Lampung 35213
            </p>
          </div>

          <div className="flex flex-col my-10 space-y-5">
            <div className="flex items-center space-x-2 text-lg">
              <BsWhatsapp className="text-2xl" />
              <span>0812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <BsInstagram className="text-2xl" />
              <span>@hello.world</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <BsLine className="text-2xl" />
              <span>@hello.world</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <BsYoutube className="text-2xl" />
              <span>hello world</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 items-center justify-center flex">
          <img src="map1.png" alt="map" className="h-[400px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default About;
