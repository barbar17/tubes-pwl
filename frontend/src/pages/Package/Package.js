import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Package() {
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
        console.log("");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        console.log("basing");
        const response = await axios.get("http://localhost:5000/token", {
          withCredentials: true,
        });
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

  const order = async () => {
    try {
      const response = await axiosJWT.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* prewed indoor */}
      <div className="flex flex-col items-center">
        <div className="mt-20 font-serif text-4xl">
          <p>Prewedding Package</p>
        </div>
        <div className="mt-16 font-serif">
          <p>Prewedding Package - Indoor concept</p>
        </div>
        <div className="text-slate-400">
          <p>PRE-WEDDING PHOTOSHOOT WITH INDOOR SETTING</p>
        </div>
        <div className="item-start flex-row flex">
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="123.jpg" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">SILVER</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2 concepts (minimalis concepts)</li>
                    <li>3 hours coverage</li>
                    <li>2 looks wardrobe</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>20 edited files</li>
                    <li>2 photos 50x75 printed with frame</li>
                    <li>5 photos 11R printed with frame</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="grid5.jpg" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">GOLD</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2 concepts (minimalis concepts)</li>
                    <li>4 hours coverage</li>
                    <li>1 decoration</li>
                    <li>3 looks wardrobe</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>20 edited files</li>
                    <li>2 photos 50x75 printed with frame</li>
                    <li>5 photos 11R printed with frame</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prewed outdoor */}
      <div className="flex flex-col items-center">
        <div className="mt-20 font-serif text-4xl">
          <p>Prewedding Package</p>
        </div>
        <div className="mt-16 font-serif">
          <p>Prewedding Package - Outdoor concept</p>
        </div>
        <div className="text-slate-400">
          <p>PRE-WEDDING PHOTOSHOOT WITH OUTDOOR SETTING</p>
        </div>
        <div className="item-start flex-row flex">
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="paketprewedding/silver.jpeg" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">SILVER</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2 concepts (minimalis concepts)</li>
                    <li>3 hours coverage</li>
                    <li>2 looks wardrobe</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>20 edited files</li>
                    <li>2 photos 50x75 printed with frame</li>
                    <li>5 photos 11R printed with frame</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="paketprewedding/gold.jpeg" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">GOLD</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>1-day photo session</li>
                    <li>2 concepts (minimalis concepts)</li>
                    <li>1 photographer</li>
                    <li>1 videographer</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>30 edited files</li>
                    <li>2 photos 50x75 printed with frame</li>
                    <li>1-minute cinematic video</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wedding day */}
      <div className="flex flex-col items-center">
        <div className="mt-20 font-serif text-4xl">
          <p>Wedding Package</p>
        </div>
        <div className="mt-16 font-serif">
          <p>Wedding Day</p>
        </div>
        <div className="text-slate-400">
          <p>WEDDING DAY PHOTOSHOOT</p>
        </div>
        <div className="item-start flex-row flex">
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="grid3.jpg" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">SILVER</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>1-day photosoot session 8 hours</li>
                    <li>2 photographer</li>
                    <li>2 cinematographer</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2-4 minute cinematic video</li>
                    <li>1 hardcover album 30x20</li>
                    <li>2 photos 50x75 printed with frame</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-400 w-auto p-5 m-10">
            <div className="flex flex-row">
              <div>
                <img src="wedding3.png" className="object-contain h-80 w-80 mr-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif self-center text-2xl">GOLD</div>
                <div className="text-amber-800 my-2">Service you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2-day photo session 8 hours</li>
                    <li>2 photographer</li>
                    <li>2 cinematographer</li>
                  </ul>
                </div>
                <div className="text-amber-800 my-2">Items you get</div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>2-4 minute cinematic video</li>
                    <li>1 hardcover album 30x20</li>
                    <li>2 photos 50x75 printed with frame</li>
                  </ul>
                </div>
                <div className="font-serif self-end">
                  <Link to={"/payment"}>
                    <button onClick={order} className="bg-[#d9d9d9] p-2 mt-4 italic">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
