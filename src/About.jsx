import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="pb-10">
      {/* Hero Section */}
      <div>
        <div className="bg-gradient-to-t from-orange-100 to-orange-500  flex items-center justify-center py-1 md:py-2">
          <h1 className="text-orange-600 text-xl md:text-2xl font-bold font-sans">My Portfolio</h1>
        </div>
      </div>
      

      {/* About Me Section */}
      <div className=" mx-auto px-5 md:px-10 pt-20 font-sans ">
        <div className="grid grid-cols-1 md:flex gap-6 md:max-h-96 ">
                {/* Left Column: Image */}
              <motion.div
                className="relative mx-auto z-10 h-[200px] w-[200px] md:h-[600px] md:w-[600px] "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                          <motion.img
                            src="portfolio.jpg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="  rounded-3xl shadow-lg aspect-square "
                          />
              </motion.div>

                    {/* Right Column: Text Content */}
              <motion.div
                className="flex "
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div>
<motion.h1
  className="text-3xl md:text-4xl text-orange-600 font-serif text-left"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  About Me
</motion.h1>
<p className="mt-2 text-gray-700 md:text-left leading-relaxed text-left">
  Hello! I am Vijay Bhagat, a passionate Web Developer with experience in building
  modern, responsive, and user-friendly web applications. I specialize in
  React.js, JavaScript, and Tailwind CSS, and I am dedicated to creating
  seamless digital experiences.
</p>
<p className="mt-4 text-gray-700 md:text-left leading-relaxed text-left">
  My portfolio showcases my journey in web development, highlighting
  projects that demonstrate my technical expertise and creativity. Below are some of my key projects:
</p>
<motion.h1
  className="text-xl md:text-xl text-orange-600 font-serif text-left"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
 My Porjects
</motion.h1>
<ul className="mt-1 text-gray-700 leading-relaxed text-left">
  <li className="mt">
    <strong>BarbellBase:</strong> An e-commerce platform for fitness products.
    <a
      href="https://github.com/vijaybhagat15/gym-c"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      GitHub
    </a>
    | 
    <a
      href="https://gym-c.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      Vercel
    </a>
  </li>
  <li className="mt-2">
    <strong>ThoughtNest:</strong> A blogging platform with a focus on simplicity and ease of use.
    <a
      href="https://github.com/your-username/ThoughtNest"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      {/* GitHub */}
    </a>
    | 
    <a
      href="https://thoughtnest.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      {/* Vercel */}
    </a>
  </li>
</ul>
<p className="mt-4 text-gray-700 md:text-left leading-relaxed text-left">
  Let's build something great together!
</p>
</div>
            </motion.div>
        </div>
        

{/* Skills Section */}
<div className="mt-6">
  <h2 className="text-3xl md:text-4xl text-orange-600 text-left font-serif">Skills</h2>
  <p className="mt-4 text-gray-700 text-left">
    I have honed various technical skills through diverse projects, including building dynamic applications and responsive websites. Below are the skills I’ve acquired and where I have applied them:
  </p>
  <ul className="mt-4 text-gray-700 leading-relaxed text-left">
  <li className="mt-2">
    ⚡ <strong>React.js & JavaScript:</strong> Utilized in developing the frontend of projects like 
    <span className="font-bold underline mx-2">
      BarbellBase
    </span> 
    and 
    <span className="font-bold underline mx-2">
      ThoughtNest
    </span> for creating interactive and dynamic user interfaces.
  </li>
  <li className="mt-2">
    ⚡ <strong>Tailwind CSS & Responsive Design:</strong> Applied for styling and ensuring responsiveness in the 
    <span className="font-bold underline mx-2">
      BarbellBase
    </span> e-commerce app to deliver seamless experiences across devices.
  </li>
  <li className="mt-2">
    ⚡ <strong>Backend Services with Appwrite:</strong> Used to manage authentication, databases, and APIs in applications like 
    <span className="font-bold underline mx-2">
      ThoughtNest
    </span> for streamlined backend functionality.
  </li>
  <li className="mt-2">
    ⚡ <strong>Version Control with Git:</strong> Leveraged to manage codebase changes and collaborate effectively across projects, ensuring code stability and traceability.
  </li>
  <li className="mt-2">
    ⚡ <strong>Deployment on Vercel:</strong> Deployed live versions of projects, such as the 
    <span className="font-bold underline mx-2">
      BarbellBase
    </span> website, ensuring high performance and reliability for end-users.
  </li>
</ul>

</div>


        {/* Projects Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl text-orange-600 text-center font-serif">Projects</h2>
          <div className="flex flex-cols-1 sm:flex-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {/* Project 1 */}
           
            {/* Project 2 */}
            <div className="bg-gray-200 text-orange-500 font-bold text-xl p-4 rounded-3xl shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform mx-auto">
              <img
                src="pT1.png"
                alt="Project 2"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
  <li className="text-gray-600">
    <strong className="text-orange-500">BarbellBase:</strong> An e-commerce platform for fitness products.
    <a
      href="https://github.com/vijaybhagat15/gym-c"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      GitHub
    </a>
    | 
    <a
      href="https://gym-c.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mx-2"
    >
      Vercel
    </a>
  </li>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-b from-orange-100 to-orange-500 py-12 text-center  rounded-3xl text-gray-900">
          <h2 className="text-3xl font-serif font-bold ">Get in Touch</h2>
          <p className="mt-4 text-lg font-sans">
            I am always open to discussing new projects, creative ideas, or
            opportunities. Let's connect!
          </p>
          <button className="mt-8 animate-bounce">
            <Link to={"/contact"} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group m-10 h-10 ">
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease rounded-lg"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease rounded-lg"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-600 opacity-0 group-hover:opacity-100 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-bold animate-bounce">Contact Me</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Portfolio;
