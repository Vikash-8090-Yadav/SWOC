import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className = "bg-gray-300 h-1/3 w-full flex md:flex-row flex-col justify-between items-center p-0 pt-6 mt-10 shadow-2xl">
        <div className = "p-5">
          <ul>
            <p className = "text-gray-800 font-bold text-4xl pb-6 font-title">
              Meta<span className = "text-blue-500">.eth</span>
            </p>
            <div className = "flex gap-5 pb-5">
              <FaDribbble className = "text-2xl cursor-pointer hover:text-pink-500" />
              <FaFacebook className = "text-2xl cursor-pointer hover:text-blue-500" />
              <FaInstagram className = "text-2xl cursor-pointer hover:text-pink-600" />
              <FaLinkedin className = "text-2xl cursor-pointer hover:text-blue-700" />
              <FaTwitter className = "text-2xl cursor-pointer hover:text-blue-400" />
              <FaYoutube className = "text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>

        <div className = "flex">
          <div className = "p-5 px-10">
            <ul>
              <p className = "text-gray-800 font-bold text-base pb-2 uppercase">Resources</p>  
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Meta.eth</li>
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href = "https://tailwindcss.com/" target = "_blank" rel = "noreferrer">Tailwind CSS</a>
              </li>
            </ul>
          </div>

          <div className = "p-5 px-10">
            <ul>
              <p className = "text-gray-800 font-bold text-base pb-2 uppercase">Follow Us</p>  
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="https://github.com/" target = "_blank" rel = "noreferrer">Github</a>
              </li>
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="https://discord.gg/" target = "_blank" rel = "noreferrer">Discord</a>
              </li>
            </ul>
          </div>

          <div className = "p-5 px-10">
            <ul>
              <p className = "text-gray-800 font-bold text-base pb-2 uppercase">Legal</p>  
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Privacy Policy</li>
              <li className = "text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className = "text-center bg-gray-700 text-white font-semibold">© 2022-2023 Meta.eth™. All Rights Reserved.</div>
    </>
  )
}

export default Footer
