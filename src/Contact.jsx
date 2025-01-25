import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <>
     


        {/* Help Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center font-serif">How I can help you?</h2>
          <div className="flex ">
            {/* Contact Us */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md mx-auto">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <span className="text-green-500">
                  <FaPhoneAlt className="text-green-500" />
                </span>
                Contact Us
              </h3>
              <p className="text-gray-900">
                Reach out via phone, email, or live chat. I am available to assist you with any queries.
              </p>
            </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className=" flex flex-col lg:flex-row items-center justify-center p-6 font-sans">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 max-w-md mb-8 lg:mb-0 lg:mr-12">
          <div className=" shadow-lg rounded-lg p-8 mb-6 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105 ">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-gray-900 mr-4 text-2xl" />
              <h2 className="text-lg font-bold text-gray-800 font-serif">Call to me</h2>
            </div>
            <p className="text-gray-700 mb-2">
            We will definitely have a productive discussion.            </p>
            <p className="text-gray-900 font-semibold">Phone: +91 9359571296</p>
          </div>

          <div className="shadow-lg rounded-lg p-8 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-900 mr-4 text-2xl" />
              <h2 className="text-lg font-bold text-gray-800 font-serif">Email me</h2>
            </div>
            <p className="text-gray-700 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-900 font-semibold">vijaybhagatmitlab@gmail.com</p>
            <p className="text-gray-900 font-semibold">vijaybhagat2002@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className=" shadow-xl rounded-lg p-8 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <h1 className="text-lg font-bold text-center mb-6 font-serif">Give Feedback</h1>
            <form className="space-y-4">
              <div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-400 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-400 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="placeholder:text-gray-900 w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-900 focus:ring-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3  text-gray-100 font-semibold  flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-600  bg-orange-500  rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-gray-300 font-sans"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
