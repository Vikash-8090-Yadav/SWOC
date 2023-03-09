import React from 'react';
import {Link} from 'react-scroll';
import {FaFileContract, FaNewspaper, FaClipboardList} from 'react-icons/fa';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {IoWalletSharp} from 'react-icons/io5';
import {MdNotificationImportant} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai';

function SideNavbar({children}) {
  const links = [
    {
      id: 1,
      title: "Add Employee",
      link: "/addemp",
      icon: (
        <>
          <BsFillPersonPlusFill size = {25} />
        </>
      ),
    },
    {
      id: 2,
      title: "Employee List",
      link: "/emplist",
      icon: (
        <>
          <FaClipboardList size = {25} />
        </>
      )
    },
    {
      id: 3,
      title: "Pay Salary",
      link: "/empsal",
      icon: (
        <>
          <IoWalletSharp size = {25} />
        </>
      )
    },
    {
      id: 4,
      title: "Contract Balance",
      link: "/contractbal",
      icon: (
        <>
          <FaFileContract size = {25} />
        </>
      )
    },
    {
      id: 5,
      title: "Notifications",
      link: "/",
      icon: (
        <>
          <MdNotificationImportant size = {25} />
        </>
      )
    },
    {
      id: 6,
      title: "Latest News",
      link: "/",
      icon: (
        <>
          <FaNewspaper size = {25} />
        </>
      )
    },
    {
      id: 7,
      title: "Settings",
      link: "/",
      icon: (
        <>
          <AiFillSetting size = {25} />
        </>
      )
    },
  ]

  return (
    <>
      <div name = "cards">
        <div className = "bg-gradient-to-b from-black to-gray-800 text-white flex justify-between">
          {children}
          <nav className = 'nav-menu'>
            <ul className = "w-full">
              {
                links.map(({id, title, link, icon}) => (
                  <li key = {id}>
                    <Link to = {link} smooth duration={50} className = "flex max-md:flex-row-reverse justify-start items-center py-2 px-4 h-14 my-2 text-xl text-blue-500 bg-white font-bold hover:bg-blue-500 hover:text-white cursor-pointer border-b-2 border-black">
                      {icon}
                      <span className = "ml-4 max-lg:hidden">{title}</span>
                    </Link>        
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SideNavbar
