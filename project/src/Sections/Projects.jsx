import React from "react";


function Projects () {



    return(
        <div className="h-screen flex flex-col items-center justify-center">
      
      {/* Container for the title */}
      <div className="w-full flex justify-center mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center w-full">Projects Go Here</h1>
      </div>
      
      {/* Main content container for text and image */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-20 mt-10 space-y-8 md:space-y-0 md:space-x-10">
          
        {/* Text content on the left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-white text-lg text-center">
            This is a brief explanation of the project. It showcases the key features, technologies used, and the goal of the application.
          </p>
        </div>
        
        {/* Image on the right */}
        <div className="flex-1 flex justify-center md:justify-end hover:scale-105 duration-500">
          <img 
            src="https://github.com/HaarisRmnyr/Express-Blog-CinemaBlab/blob/main/CinemaBlab-Home-Demo.png?raw=true"
            alt="CinemaBlab"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl"
          />
        </div>
          
      </div>

    </div>
    )
}

export default Projects;