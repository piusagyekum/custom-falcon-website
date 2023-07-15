import React from "react"

function Wrapper({ info, backgroundImage }) {
  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className="wrapper  h-screen -z-10 bg-blend-overlay mb-10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-8 font-black text-white text-2xl md:text-4xl">
        {info}
      </div>
    </div>
  )
}

export default Wrapper
