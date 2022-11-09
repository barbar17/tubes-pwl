import React from "react";

function Package() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
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
                <button className="bg-[#d9d9d9] p-2 mt-4 italic">ORDER NOW</button>
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
                <button className="bg-[#d9d9d9] p-2 mt-4 italic">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
