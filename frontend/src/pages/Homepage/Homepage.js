import React from 'react'

function Homepage() {
    return (
        <>
            <div>
                <img src="_SUR0186 1.jpg" alt="beranda" className="w-full h-screen object-cover" />
            </div>

            <div className="flex flex-col mx-16">
                <div className="flex flex-col relative">
                    <div className="bg-[#f5f5f5] absolute right-0 top-1/2 -translate-y-1/2  text-center flex flex-col items-center justify-between max-w-md h-1/2 px-10 py-24">
                        <div className="flex flex-col items-center">
                            <h1 className='font-bold tracking-widest'>HELLOWEDDING</h1>
                            <h2 className="text-4xl mt-8">Lorem Ipsum</h2>
                            <p className="text-sm mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h1 className='font-bold tracking-widest'>HELLOWEDDING</h1>
                            <h2 className="text-4xl mt-8">Lorem Ipsum</h2>
                            <p className="text-sm mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>
                    </div>

                    <div className="mr-64">
                        <img src="photo2.jpg" alt='foto' className="mt-32 mb-48" />
                        <img src="photo3.jpg" alt='foto' className="mt-48 mb-32" />
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
                        <h1 className='font-bold tracking-widest'>HELLOWEDDING</h1>
                        <h2 className="text-4xl mt-8">Pre Wedding</h2>
                        <p className="text-sm mt-5 mx-48 items-center justify-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center my-20">
                    <div className="text-center flex flex-col items-center justify-end pb-[80px] bg-[url('https://cdn.helloworldindonesia.com/c3ZnL29yaWdpbmFsL29iajEuc3Zn')] bg-no-repeat bg-center w-full h-[300px]">
                        <h1 className='font-bold tracking-widest'>HELLOWEDDING</h1>
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
        </>
    )
}

export default Homepage