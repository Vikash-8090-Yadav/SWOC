import React from 'react'
import Image from "next/image";
import BlockChain from "../images/blockchain.png";

const AboutApp = () => {
  return (
    <>
      <div name = "About" className = "w-full py-10">
        <h1 className = " text-center text-5xl py-5">About Us</h1>
        <div className = "mx-auto flex flex-col items-center justify-between h-full px-4 md:px-8 my-3 md:flex-row">
          <div className = "mb-5">
            <Image src = {BlockChain} alt = "blockchain" width = "2500" height = "2000" /> 
          </div>
          <div>
            <p className = "text-justify max-md:py-3">
              A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutApp
