import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer