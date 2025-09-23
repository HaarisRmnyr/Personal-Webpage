import React from "react";


function About() {





    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mt-40">About Me</h1>
            <img src="./images/Placeholder.png"alt="Placeholder-me" className="w-10 sm:w-1/4 md:w-20 md: mt-20"/>


            <div className="flex flex-col items-center justify-center md:justify-start mt-20 mb-20 md:flex-row">
                <p className="text-12px w-3/5 sm:text-2xl md:text-3xl md:w-1/3 md:ml-40 text-center text-white bg-gray-700 rounded-xl p-8 mb-20">
                My name is Haaris Rahmanyar. I'm currently a Software Engineering bachelors Student
                at York University. I have a passion for cybersecurity aswell as a growing intrest in web development. My current skills include 
                a combonation of React and Tailwindcss aswell as HTML and CSS for frontend development. For backend, I'm able to effectivley use Express js, Node.js 
                , and MongoDB. My passion for cybersecurity has also given me a familiarity with Kali linux and Virtualbox, along with tools like burpsuite, Metasploit, and Splunk.</p>

                <img src="./images/About-section-icons.jpg"alt="My company logo" className="w-64 sm:w-1/2 md:w-1/3 md:mb-72 md:ml-64"/>





            </div>

        </div>




    )
}


export default About;