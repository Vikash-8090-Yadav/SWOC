import React from 'react'
import Link from "next/link"
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'

function Sidenav() {
  const handleLogout1=()=>{
    return handleLogout={handleLogout}
  }
  const handleWeb3ButtonClick = () => {
    // code to handle web3 button click
    setLogoutVisible(true);
  }
  return (
    <>
      <nav className = "left-0 bg-white shadow-md w-full">
        <div className = "container m-auto flex justify-between items-center">
          <h1 className = "pl-8 py-4 text-xl font-bold">
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          </h1>

          <ul className = "hidden lg:flex items-center pr-10 text-base font-semibold cursor-pointer">

            <li className = "cursor-pointer items-center"> 
              <Link href = "/addemp">
                <a className = "py-4 px-3 items-center w-full h-full">
                  <span className = "">Add Employee</span>
                </a>
              </Link>

              <Link href = "/emplist">
                <a className = "py-4 px-3 items-center w-full h-full">
                  <span className = "">Employee List</span>
                </a>
              </Link>

              <Link href = "/empsal">
                <a className = "py-4 px-3 items-center w-full h-full"> 
                  <span className = "">Pay Salary</span>
                </a>
              </Link>

              <Link href = "/contractbal">
                <a className = "py-4 px-3 items-center w-full h-full">
                  <span className = "">Contract Balance</span>
                </a>
              </Link>

              <Link href = "/">
                <a className = "py-4 px-3 items-center w-full h-full"> 
                  <span className = "">Important Announcement</span>
                </a>
              </Link>

              <Link href = "/">
                <a className = "py-4 px-3 items-center w-full h-full"> 
                  <span className = "">Latest News</span>
                </a>
              </Link>

            </li>
          </ul>

          <button className = "block lg:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
            <div className ="space-y-1 cursor-pointer">
              <div className ="w-6 h-1 bg-gray-600"></div>
              <div className ="w-6 h-1 bg-gray-600"></div>
              <div className ="w-6 h-1 bg-gray-600"></div>
            </div>

            <div className = "absolute -right-full h-screen w-8/12 border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300 bg-blue-500 mt-5">
              <ul className = "flex flex-col items-center w-full text-base cursor-pointer pt-5">
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Add Employee</li>
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Employee List</li>
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Pay Salary</li>
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Contract Balance</li>
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Important Announcement</li>
                <li className = "py-3 px-6 w-full font-semibold border-b-2 border-black">Latest News</li>
              </ul>
            </div>
          </button>
        </div>
      </nav>

      <section className = "mt-10 px-4">
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className = "mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
    </>
  )
}

export default Sidenav
