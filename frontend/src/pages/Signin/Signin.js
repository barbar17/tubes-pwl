import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert("Email atau Password Salah!!");
      }
    }
  };

  return (
    <div className="flex w-full h-screen relative">
      <img src="grid3.jpg" alt="fotologin" className="w-full h-full object-cover object-center" />
      <div className="w-[400px] h-full absolute right-0 z-10 bg-white opacity-95 flex flex-col justify-center items-center p-10   ">
        <h1 className="text-3xl font-bold my-5">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <span className="font-bold my-3">Email</span>
          <input type={"email"} placeholder="Ex: myemail@mail.com" className="w-full p-3 box-border bg-transparent rounded border-2 text-sm" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <span className="font-bold my-3">Password</span>
          <input type={"password"} placeholder="Enter Password" className="w-full p-3 box-border bg-transparent rounded border-2 text-sm" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button className="w-full bg-[#646464] my-8 p-2 text-white rounded-md text-sm font-bold">Sign In</button>
        </form>
        <span>
          Don't have account?{" "}
          <Link to={"/signup"} className="text-red-600">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
