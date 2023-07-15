import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import Wrapper from "./components/Wrapper"

const Home = () => {
  return (
    <div className="">
      {/* wrapper */}
      <Wrapper
        backgroundImage="url('./images/wrapper.jpg')"
        info={
          <div>
            Unleashing the Power <br /> of Code Transform your Vision <br />
            reality
          </div>
        }
      />
      <section className="home-services  px-[5%] ">
        <h3 className="section-title">our services</h3>
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-4 lg:gap-x-8 flex-wrap lg:flex-nowrap justify-between">
          <div className="home-services-item relative rounded-lg h-[200px] overflow-hidden border hover:after:bg-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:h-[5px] hover:after:w-full hover:after:z-50  before:w-full before:h-full  before:content-[''] before:opacity-50  before:absolute before:bg-black before:-z-40 md:w-[47%]">
            <img
              src="./images/wrapper.jpg"
              alt=""
              className="h-full w-full object-cover absolute object-left-bottom -z-50 hover:opacity-50 transition-all"
            />
            <p className="font-bold text-2xl absolute w-full text-center top-[47%] text-white">
              Fintech Solutions
            </p>
            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[calc(50%_-_37px)] text-white hover:text-black hover:bg-slate-300 ">
              Read More
            </button>
          </div>
          <div className="home-services-item relative rounded-lg h-[200px] overflow-hidden border hover:after:bg-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:h-[5px] hover:after:w-full hover:after:z-50  before:w-full before:h-full  before:content-[''] before:opacity-50  before:absolute before:bg-black before:-z-40 md:w-[47%]">
            <img
              src="./images/wrapper.jpg"
              alt=""
              className="h-full w-full object-cover absolute object-left-bottom -z-50 hover:opacity-50 transition-all"
            />
            <p className="font-bold text-2xl absolute w-full text-center top-[47%] text-white">
              Mobile App{" "}
              <span className="lg:hidden xl:inline-block ">Development</span>
            </p>
            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[calc(50%_-_37px)] hover:bg-slate-300 text-white hover:text-black">
              Read More
            </button>
          </div>
          <div className="home-services-item relative rounded-lg h-[200px] overflow-hidden border hover:after:bg-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:h-[5px] hover:after:w-full hover:after:z-50  before:w-full before:h-full  before:content-[''] before:opacity-50  before:absolute before:bg-black before:-z-40 md:w-[47%]">
            <img
              src="./images/wrapper.jpg"
              alt=""
              className="h-full w-full object-cover absolute object-left-bottom -z-50 hover:opacity-50 transition-all"
            />
            <p className="font-bold text-2xl absolute w-full text-center top-[47%] text-white">
              USSD SERVICES
            </p>
            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[calc(50%_-_37px)] hover:bg-slate-300 text-white hover:text-black">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "rgba(5, 5, 5, 0.9) url('./images/services.jpg') repeat-x fixed top left / cover",
        }}
        className=" bg-blend-multiply pt-3 pb-10 mt-16"
      >
        <h3 className="section-title my-10 text-white">Our Working process</h3>
        <p className="text-sm text-white text-center pb-5">
          Our software development process relies on incremental development
        </p>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 justify-around">
          <div className=" border relative rounded-lg  bg-gray-100 p-3 pb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#64748b"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <h3 className="text-2xl text-center italic mb-8">
              Requirement Analysis
            </h3>
            <p className="text-center">
              We review the Customer proposition, validate the projects
              possibility, and collect data as part of the feasibility study
            </p>

            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[50%] -translate-x-1/2 bg-slate-500  hover:text-black hover:bg-cyan-600 ">
              Read More
            </button>
          </div>
          <div className=" border relative rounded-lg  bg-gray-100 p-3 pb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#64748b"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <h3 className="text-2xl text-center italic mb-8">
              Resource Planning{" "}
            </h3>
            <p className="text-center">
              The development of Customer Software architecture will require
              several experts in the field of software development
            </p>

            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[50%] -translate-x-1/2 bg-slate-500  hover:text-black hover:bg-cyan-600 ">
              Read More
            </button>
          </div>
          <div className=" border relative rounded-lg  bg-gray-100 p-3 pb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#64748b"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <h3 className="text-2xl text-center italic mb-8">
              Design and Prototyping{" "}
            </h3>
            <p className="text-center">
              We start with a prototype to align with specifications, remove
              design drawbacks, make changes based on customer requirements.
            </p>

            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[50%] -translate-x-1/2 bg-slate-500  hover:text-black hover:bg-slate-400 ">
              Read More
            </button>
          </div>{" "}
        </div>
      </section>
    </div>
  )
}

export default Home
