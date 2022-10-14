import React from 'react'
import { HiArrowUp } from 'react-icons/hi'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="flex flex-col w-full justify-center items-center h-fit bg-[#ebebeb] py-10 px-20 relative">

            <button className='absolute top-0 right-0 p-2 w-12 grey flex text-gray-500 flex-col h-24 justify-between items-center' onClick={scrollToTop}>
                <HiArrowUp className='h-1/5' />
                <span className='transform -rotate-90 w-32'>Back To Top</span>
            </button>

            <h1 className='font-bold tracking-widest mt-10'>HELLOWEDDING</h1>

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
                <span>&copy; 2022, Hello Wedding</span>
            </div>
        </div>
    )
}

export default Footer