import React from 'react'

function Contact() {
  return (
    <>
      <div name = "contact" className = "w-full py-5 bg-gradient-to-br from-black to-gray-700 mt-1">
        <h1 className = "text-4xl pt-8 pb-4 px-24 font-semibold underline max-md:text-center text-white">Contact Us</h1>
        <div className = "mx-auto flex flex-col items-center justify-center h-full px-4 md:px-8 my-3">
          <form className = "w-full flex flex-col items-center justify-center">
            <input type = "text" name = "name" placeholder = "Enter your Name" className = "w-1/2 max-md:w-3/4 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type = "email" name = "email" placeholder = "Enter your Email" className = "w-1/2 max-md:w-3/4 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type = "text" name = "sub" placeholder = "Enter the Subject" className = "w-1/2 max-md:w-3/4 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name = "message" rows = "7" placeholder = "Enter your Email" className = "w-1/2 max-md:w-3/4 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <button className = "bg-blue-500 w-1/2 max-md:w-3/4 rounded-md text-white font-semibold text-xl p-1 hover:bg-blue-800 mb-8">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
