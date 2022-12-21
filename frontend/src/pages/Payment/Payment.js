import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';

function Payment() {
  const navigate = useNavigate();
  const [setToken] = useState("");
  const [setExpire] = useState("");

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

  return (
    <div className="flex p-10">
      <div className="w-1/2">
        <div className="flex w-full justify-center items-center">
          <h3 className="text-2xl tracking-widest">HELLO WEDDING</h3>
        </div>
        <div>
          <h6 className="my-5">Information</h6>
          <h5 className="text-2xl">Contact Information</h5>
          <div className="flex space-x-2 items-center">
            <BsPersonCircle className="text-4xl" />
            <h6>Gilang (gilang@gmail.com)</h6>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(2,250px)] px-2 py-8">
          <div className="col-6 p-1">
            <label>First Name</label>
            <input type="text" className='border ml-2 border-slate-200 rounded-md text-lg p-2' placeholder="name@example.com" />
          </div>
          <div className="col-6 p-1">
            <label>Last Name</label>
            <input type="text" className='border ml-2 border-slate-200 rounded-md text-lg p-2' placeholder="name@example.com" />
          </div>
          <div className="col-span-2 p-1">
            <label>Mobile Phone</label>
            <input type="text" className='w-full border ml-2 border-slate-200 rounded-md text-lg p-2' placeholder="Ex: 081234567890" />
          </div>


          <div className="col-span-2 py-1 px-1">
            <label>Package</label>
            <select className="border ml-2 w-full border-slate-200 rounded-md text-lg p-2" aria-label="Default select example">
              <option value="1">Wedding</option>
              <option value="2">Prewedding</option>
              <option value="3">Engagement</option>
            </select>
          </div>

          <div className="col-span-2 py-1 px-1">
            <label>Package Detail</label>
            <select className="border ml-2 w-full border-slate-200 rounded-md text-lg p-2" aria-label="Default select example">
              <option value="1">Silver</option>
              <option value="2">Gold</option>
              <option value="3">Diamond</option>
            </select>
          </div>

          <div className="col-span-2 py-1 px-1">
            <label>Adds On</label>
            <select className="border ml-2 w-full border-slate-200 rounded-md text-lg p-2" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-span-2 py-1 px-1">
            <label>Date & Time Reservation</label>
            <input className="border ml-2 w-full border-slate-200 rounded-md text-lg p-2" aria-label="Default select example" type={'datetime-local'} />
          </div>

          <div className="col-span-2 py-1 px-1">
            <label>Location</label>
            <input type="text" className='w-full border ml-2 border-slate-200 rounded-md text-lg p-2' placeholder="Ex: Monas" />
          </div>
        </div>

        <div className="flex w-full justify-end">
          <button type="button" className="py-2 px-3 text-xl rounded-md" style={{ backgroundColor: "#D7DBDD" }}>
            Continue
          </button>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img src="about1.jpg" className="h-full object-cover" />
      </div>
    </div>
  );
}

export default Payment;
