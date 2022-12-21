import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

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
        <h3 className="ms-3 mb-4">HELLO WEDDING</h3>
        <h6 className="mb-3">Information</h6>
        <h5 className="mb-2">Contact Information</h5>
        <div className="d-flex my-4 align-items-center">
          <i className="bi bi-person-circle me-2" style={{ fontSize: "2rem" }}></i>
          <h6>gilang@gmail.com</h6>
        </div>
        <div className="row px-2">
          <div className="col-6 p-1">
            <input type="text" className="form-control" placeholder="name@example.com" />
          </div>
          <div className="col-6 p-1">
            <input type="text" className="form-control" placeholder="name@example.com" />
          </div>
          <div className="col-6 p-1">
            <input type="text" className="form-control" placeholder="name@example.com" />
          </div>
        </div>

        <div className="row px-2">
          <div className="col-12 p-1 py-2">
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 p-1 py-2">
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 p-1 py-2">
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 p-1 py-2">
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 p-1 py-2">
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="d-flex my-5">
          <button type="button" className="btn btn-light btn-lg ms-auto" style={{ backgroundColor: "#D7DBDD" }}>
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
