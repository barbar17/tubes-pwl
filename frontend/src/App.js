import React from "react";
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="flex flex-col w-full">
        <div className="flex py-3 px-14 w-full bg-white items-center justify-between sticky top-0 z-10">
          <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-36" />

          <div className="flex items-center justify-center">
            <ul className="flex text-sm">
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

            <div className="p-2 bg-[#d9d9d9] rounded-md ml-5">
              <FiMenu />
            </div>
          </div>
        </div>

        <div>
          <img src="_SUR0186 1.jpg" alt="beranda" className="w-full h-screen object-cover" />
        </div>

        <div className="flex flex-col mx-16">
          <div className="flex flex-col relative">
            <div className="bg-[#f5f5f5] absolute right-0 top-1/2 -translate-y-1/2  text-center flex flex-col items-center justify-between max-w-md h-1/2 px-10 py-24">
              <div className="flex flex-col items-center">
                <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-32" />
                <h2 className="text-4xl mt-8">Lorem Ipsum</h2>
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-32" />
                <h2 className="text-4xl mt-8">Lorem Ipsum</h2>
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
              </div>
            </div>

            <div className="mr-64">
              <img src="photo2.jpg" className="mt-32 mb-48" />
              <img src="photo3.jpg" className="mt-48 mb-32" />
            </div>
          </div>

          <div className="flex w-full h-fit">
            <div className=" grid gap-4 grid-cols-[repeat(3,auto)] grid-rows-[repeat(4,200px)] relative w-full">
              <div className="col-span-1 row-span-2 w-full h-auto flex relative items-center justify-center">
                <img src="grid1.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-2 row-span-1 w-full h-auto flex relative items-center justify-center">
                <img src="grid2.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-1 row-span-2 w-full h-auto flex relative items-center justify-center">
                <img src="grid4.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-1 row-span-1 w-full h-auto flex relative items-center justify-center">
                <img src="grid3.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-1 row-span-1 w-full h-auto flex relative items-center justify-center" >
                <img src="grid5.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-1 row-span-2 w-full h-auto flex relative items-center justify-center">
                <img src="grid6.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
              <div className="col-span-2 row-span-1 w-full h-auto flex relative items-center justify-center">
                <img src="grid7.jpg" alt="grid1" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
            </div>

            <div className="w-full text-center flex flex-col items-center justify-center">
              <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-32" />
              <h2 className="text-4xl mt-8">Pre Wedding</h2>
              <p className="text-sm mt-5 mx-48 items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-20">
            <div className="text-center flex flex-col items-center justify-end pb-[80px] bg-[url('https://cdn.helloworldindonesia.com/c3ZnL29yaWdpbmFsL29iajEuc3Zn')] bg-no-repeat bg-center w-full h-[300px]">
              <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-32" />
              <h2 className="text-4xl mt-5">Pre Wedding</h2>
            </div>
            <div className="bg-slate-300 w-2/3">
              <img src="photo4.jpg" alt="photo4" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

        <div className="relative w-full bg-[#ebebeb] flex justify-between my-[100px]">
          <div className="text-9xl text-white font-bold w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute z-10 text-center">
            <h1>Lorem Ipsum</h1>
          </div>

          <div className="flex w-1/3 relative flex-col">
            <img src="grid6.jpg" alt="gambar" className="w-full h-full object-cover mt-[-100px]" />
            <div className="w-full h-full text-center items-center justify-center flex text-2xl p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex w-1/3 absolute right-0 top-14">
            <img src="grid4.jpg" alt="gambar" className="w-full h-full object-cover mb-[-200px]" />
          </div>
        </div>
      </div>



      {/* FOOTER */}
      <div className="flex flex-col w-full justify-center items-center h-fit bg-[#ebebeb] py-10 px-20">

        <img src="https://cdn.helloworldindonesia.com/bG9nby9vcmlnaW5hbC9vcmlnaW5fdHh0X3YyLnN2Zw==" alt="logo" className="w-36" />

        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center text-xs">
            <div className="p-2">
              <ul>
                <li className="p-2">WEDDING</li>
                <li className="p-2">PREWEDDING</li>
                <li className="p-2">POTRAIT</li>
                <li className="p-2">ABOUT</li>
              </ul>
            </div>

            <div className="p-2">
              <ul>
                <li className="p-2">PACKAGE</li>
                <li className="p-2">BLOG</li>
                <li className="p-2">CONTACT</li>
              </ul>
            </div>

            <div className="p-2" >
              <ul>
                <li className="p-2">IG</li>
                <li className="p-2">YT</li>
              </ul>
            </div>
          </div>

          <div className=" flex items-center justify-center w-[450px] text-xl">
            <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel"</span>
          </div>


        </div>

        <div className="flex gap-4 my-10">
          <img src="grid1.jpg" alt="footer" className="w-[250px] h-[270px] object-cover object-center" />
          <img src="grid7.jpg" alt="footer" className="w-[250px] h-[270px] object-cover object-center" />
          <img src="grid2.jpg" alt="footer" className="w-[250px] h-[270px] object-cover object-center" />
        </div>

        <div>
          <span>&copy 2022, Hello World Photography</span>
        </div>
      </div>
    </div>
  );
}

export default App;
