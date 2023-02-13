import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GrMail} from 'react-icons/gr'
import LogoutButton from "../Component/LogoutButton"
import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"

const Navbar = ({ handleLogout }) => {
    const [nav, setNav] = useState(false);
    const links = [
      {
        id: 1,
        link: "Home",
        child: (
          <>
            <AiFillHome size = {25} />
          </>
        ),
      },
      {
        id: 2,
        link: "About",
        child: (
          <>
            <FcAbout size = {25} />
          </>
        )
      },
      {
        id: 3,
        link: "Contact",
        child: (
          <>
            <GrMail size = {25} />
          </>
        )
      },
    ]

    return (
      <>
        <div className = 'navbar'>
          <div className = "flex">
            <div className = "w-8 h-5">
              <Image className = "rounded-full" src = {SalDappLogo} height = "" width = "" alt = ""/>
            </div>
            <h1 className = "text-2xl text-extrabold text-bold font-serif ml-2 max-sm:text-sm max-sm:ml-1 max-md:mr-3 font-title">DAPP.eth</h1>
          </div>

          <ul className = "hidden md:flex text-blue-400">
            {links.map(({id, link}) => (
              <li key = {id} className = "px-4 cursor-pointer md:hover:scale-125 duration-300 capitalize text-xl font-bold">
                {link === 'Logout' ? 
                  <a className = "hidden" onClick={handleLogout}>{link}</a> : 
                  <Link to={link} smooth duration={50}>{link}</Link>
                }        
              </li>
            ))}
          </ul>

          <ul className = "md:hidden flex text-blue-400 font-extrabold text-xl">
            {
              links.map(({id, link, child}) => (
                <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize max-sm:px-1">
                  <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{child}</Link>
                </li>
              ))}
          </ul>
          
          <div className = "py-2 px-3 m-2 rounded-lg text-white bg-blue-400 font-bold max-sm:p-1 max-sm:m-1">
            <LogoutButton handleLogout={handleLogout}/>
          </div>
        </div>
      </>
    );
};

export default Navbar

