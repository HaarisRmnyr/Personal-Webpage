import React from "react";


function Hero () {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="-mt-56 font-sans text-3xl sm:text-4xl md:text-5xl text-center text-white">Thanks for Visiting, Please Check out My Works</h1>
        <button onClick={() => window.location.href='#Projects'} className="text-red-700 mt-10 w-40 h-10 border-2 text-red border-red-700 hover:text-white duration-300 hover:bg-red-700 duration-300">
            My Projects

        </button>

        </div>
    )
}


export default Hero;