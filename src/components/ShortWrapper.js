import React from 'react'
import { HiChevronRight } from "react-icons/hi2"
import { Link } from 'react-router-dom'


function ShortWrapper({info,background}) {

  return (
    <div
      style={{ background: background }}
      className=" relative h-96 -z-10  mb-10 overflow-hidden bg-blend-overlay"
    >
      <div className="  text-white font-semibold ">
        <h2 className="absolute top-1/2 left-[50%] -translate-x-1/2 capitalize text-4xl tracking-widest">
          {info}
        </h2>
        <p className="absolute top-[62%] left-[50%] -translate-x-1/2 capitalize flex items-center tracking-wider">
          <Link to="/">Home</Link> <HiChevronRight className="inline-block font-black" />
          {info}
        </p>
      </div>
    </div>
  )
}

export default ShortWrapper
