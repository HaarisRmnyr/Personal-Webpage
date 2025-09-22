import React from 'react';

function Projects() {
    return (
        <div className="flex flex-col items-center p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mt-40 mb-10">
                Projects
            </h1>

            <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 w-full">
                
                {/* Project 1 */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0 p-4 bg-white rounded-lg shadow-md">
                    <a 
                        href="https://github.com/HaarisRmnyr/Automated-Risk-Detection-and-Remediation-Project" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <img 
                            src="https://github.com/HaarisRmnyr/Automated-Risk-Detection-and-Remediation-Project/blob/main/Successful_Applicaton_of_Script.png?raw=true" 
                            alt="Project 1" 
                            className="w-full h-auto rounded-md" 
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Automation Risk Assessment and Remediation
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                This project is a Python script designed to automate the process of scanning a target virtual machine (VM) for common vulnerabilities and misconfigurations...
                            </p>
                        </div>
                    </a>
                </div>

                {/* Project 2 */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0 p-4 bg-white rounded-lg shadow-md">
                    <a 
                        href="https://github.com/HaarisRmnyr/AI-mood-music-gen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <img 
                            src="https://github.com/HaarisRmnyr/AI-mood-music-gen/blob/main/MoodSong-Demo.png?raw=true" 
                            alt="Project 2" 
                            className="w-full h-auto rounded-md" 
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                MoodSong - AI Mood Music Recommender.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                An interactive, single-page web application that uses React to analyze a user's mood and recommend songs. The app leverages the OpenAI API to interpret...</p>
                        </div>
                    </a>
                </div>

                {/* Project 3 */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0 p-4 bg-white rounded-lg shadow-md">
                    <a 
                        href="https://github.com/HaarisRmnyr/Express-Blog-CinemaBlab" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <img 
                            src="https://github.com/HaarisRmnyr/Express-Blog-CinemaBlab/blob/main/CinemaBlab-Home-Demo.png?raw=true" 
                            alt="Project 3" 
                            className="w-full h-auto rounded-md" 
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                CinemaBlab Node Express Blog Page
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                CinemaBlab is a full-stack content management system (CMS) that allows users to sign up, sign in, and publish posts about movies...
                            </p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Projects;