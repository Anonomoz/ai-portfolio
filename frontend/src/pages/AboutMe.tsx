import React from "react";
import { FaUsers, FaGamepad, FaLightbulb  } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-5xl font-bold text-center mb-10">About Me</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Me Card */}
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-200 to-blue-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://ai-portfolio-bucket.s3.eu-north-1.amazonaws.com/Billede+mig+2.png"
            alt="About Me"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            {React.createElement(FaLightbulb as any, { className: "text-blue-600" })} Profile
          </h2>
          <p className="text-center text-gray-700">
            I’m a software developer born in 1996, with a background in IT & Electronics from DTU. While studying, I gained seven years of experience in sales, which taught me to communicate effectively and adapt to all kinds of people. Today, I focus on web development, building solutions that are functional and well-structured. I work in a structured and detail-oriented way, thrive with responsibility, and enjoy generating ideas and iterating to robust solutions. Collaboration and diverse perspectives are very important to me.
          </p>
        </div>

        {/* Family Card */}
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-200 to-purple-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://ai-portfolio-bucket.s3.eu-north-1.amazonaws.com/hus.png"
            alt="Family"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            {React.createElement(FaUsers as any, { className: "text-purple-600" })} Family
          </h2>
          <p className="text-center text-gray-700">
            I married my wonderful wife in 2018. We completed the renovation of our first house and are now selling it as we move closer to Copenhagen. Family always comes first in my free time.
          </p>
        </div>

        {/* Gaming & Airsoft Card */}
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-br from-green-200 to-green-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://ai-portfolio-bucket.s3.eu-north-1.amazonaws.com/hardball+1.jpg"
            alt="Gaming & Airsoft"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            {React.createElement(FaGamepad as any, { className: "text-green-600" })} Gaming & Airsoft
          </h2>
          <p className="text-center text-gray-700">
            In my free time, I’m an avid gamer and enjoy playing airsoft. Gaming helps me unwind while connecting with friends, and airsoft challenges my strategy, teamwork, and precision skills. Both hobbies complement my love for technology and problem-solving mindset.
          </p>
        </div>
      </div>
    </div>
  );
}
