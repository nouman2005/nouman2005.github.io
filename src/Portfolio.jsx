import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6 text-center w-full">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
        />
        <h1 className="text-3xl font-bold mt-4">Your Name</h1>
        <p className="text-gray-600">Frontend Developer | React Enthusiast</p>
        <p className="text-gray-700 mt-4">
          Passionate developer with a knack for creating beautiful and
          functional web applications. Always eager to learn and build.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Skills Section */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>NPM/Yarn</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Project 1 - Description of the project.</li>
            <li>Project 2 - Description of the project.</li>
            <li>Project 3 - Description of the project.</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <p className="mt-2 text-gray-700">
            Bachelor’s in Computer Science - University Name
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="mt-2 text-gray-700">Email: your.email@example.com</p>
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 flex items-center mt-2"
          >
            <FaEnvelope className="mr-2" /> Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
