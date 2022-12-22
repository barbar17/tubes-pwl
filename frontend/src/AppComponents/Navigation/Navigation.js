import React from "react";
import axios from "axios";
import { FiMenu } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "./NavLink";
import { LinkUser } from "./NavLinkUser";

function Navigation({ tipeakun }) {
  let navigation = tipeakun === "user" ? LinkUser() : Link();
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const token = true;

  return (
    <nav className="flex py-3 px-14 w-full bg-[#F1EFEF] items-center justify-between sticky top-0 z-20 ">
      <NavLink to={""}>
        <h1 className="font-bold tracking-widest">HELLOWEDDING</h1>
      </NavLink>

      <div className="flex items-center justify-center">
        <ul className="flex text-sm ">
          {navigation.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? item.active : item.notActive)}>
                <span>{item.title}</span>
              </NavLink>
            );
          })}
          {
            token
              ? <button onClick={Logout} className={"px-5 hover:text-gray-400 transition-colors"}>LOG OUT</button>
              : <NavLink to="/signin" className={({ isActive }) => (isActive ? "px-5 text-gray-400" : "px-5 hover:text-gray-400 transition-colors")}>
                <span>SIGN IN</span>
              </NavLink>
          }

        </ul>

        <div className="flex bg-[#d9d9d9] px-5 py-1 w-52 rounded-md items-center">
          <span>Search Here</span>
        </div>

        <div className="p-2 bg-[#d9d9d9] rounded-md ml-5">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
