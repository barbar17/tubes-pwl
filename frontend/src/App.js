import React from "react";
import { FiMenu } from 'react-icons/fi';

function App() {
  return (
    <div className="App">
      <div>
        <div className="flex p-5 w-full bg-[#f1efef] items-center justify-around">
          <h1>HELLO WEDDING</h1>

          <div className="flex items-center justify-center">
            <ul className="flex">
              <li className="px-5">WEDDING</li>
              <li className="px-5">PREWEDDING</li>
              <li className="px-5">POTRAIT</li>
              <li className="px-5">ABOUT</li>
              <li className="px-5">PACKAGE</li>
              <li className="px-5">SIGN IN</li>
            </ul>

            <div className="bg-[#d9d9d9] px-5 py-1 w-52 rounded-md">
              <span>search</span>
            </div>

            <div>
              <FiMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
