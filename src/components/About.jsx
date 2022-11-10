import React from "react";

function About() {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                       <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">About</p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
