
import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {BiHome} from 'react-icons/bi'
import {FcAbout} from 'react-icons/fc'
import {GrMail} from 'react-icons/gr'
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'
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
              <BiHome size = {25} />
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

    const handleLogout1=()=>{
      return handleLogout={handleLogout}
    }
    const handleWeb3ButtonClick = () => {
      // code to handle web3 button click
      setLogoutVisible(true);
    }
    
    return (
      <>
        <div className = 'navbar'>
          <div className = "flex">
            <Image className = "rounded-full ml-3 mr-2" src = {SalDappLogo} height = "0" width = "39" alt = ""/>
            <h1 className = "text-2xl text-extrabold text-bold font-serif ml-2 text-white font-semibold max-sm:text-xl max-sm:ml-0 max-md:mr-3 font-title">DAPP.eth</h1>
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
                <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize">
                  <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{child}</Link>
                </li>
              ))}
          </ul>
                
          <div className="flex ">      
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
              { 
                <div className = "py-2 px-3 mx-4 my-2 rounded-lg text-white bg-blue-400 font-bold">
                  <LogoutButton handleLogout={handleLogout}/>
                </div> 
              } 
          </div>
        </div>
      </>
    );
};

export default Navbar

