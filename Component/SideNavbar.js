import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {FaBars, FaFileContract, FaNewspaper, FaClipboardList} from 'react-icons/fa';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {IoWalletSharp} from 'react-icons/io5';
import {MdNotificationImportant} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai'
import {Web3Button} from '@web3modal/react';

function SideNavbar() {
  const [Sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!Sidebar)

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
      <div className = "bg-black h-14 flex justify-between items-center cursor-pointer px-5 -mt-2 max-sm:px-8 shadow-2xl">
        <Link to = "#" className = "text-white">
          <FaBars onClick = {showSidebar} size = {25} />
        </Link>
        <button className = "pl-8 py-4 text-xl font-bold">
          <Web3Button balance="show" icon="hide" label="Connect Wallet" />
        </button>
      </div>

      <div className = "bg-gradient-to-b from-black to-gray-800 text-white flex">
        <nav className = {Sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className = "w-full">
            {
              links.map(({id, title, link, icon}) => (
                <li key = {id}>
                  <Link to = {link} smooth duration={50} className = "flex max-md:flex-row-reverse justify-start items-center py-2 px-4 h-14 my-2 text-xl text-blue-500 bg-white font-bold hover:bg-blue-500 hover:text-white cursor-pointer border-b-2 border-black" onClick = {showSidebar}>
                    {icon}
                    <span className = "ml-4 max-lg:hidden">{title}</span>
                  </Link>        
                </li>
              ))
            }
          </ul>
        </nav>
        <p className = "p-4">A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.</p>
      </div>
    </div>
    </>
  )
}

export default SideNavbar
