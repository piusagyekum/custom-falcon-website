import React from "react"
import { useEffect } from "react"
import { useRef } from "react"

const Home = () => {
  return (
    <div className="">
      <div className="wrapper relative -top-[56px]  h-screen -z-10 bg-blend-overlay">
        <div className="absolute top-1/2 left-8 font-black text-white text-2xl md:text-4xl">
          Unleashing the Power <br /> of Code Transform your Vision <br />
          reality
        </div>
      </div>
      <section className="home-services  px-[5%] ">
        <h3 className="home-section-title">our services</h3>
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
      <section style={{ background: "url('./images/services.jpg')" }} className="bg-fixed bg-cover bg-no-">
        <h3 className="home-section-title my-10">Our Working process</h3>
        <p className="text-sm text-gray-700 text-center">
          Our software development process relies on incremental development
        </p>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 justify-around">
          <div className="h-[300px] border relative rounded-lg  bg-gray-100">
            <img
              src="./images/logoOnly.png"
              alt=""
              className="h-20 w-20 object-contain object-center  "
            />
            <h3 className="text-2xl text-center italic mb-8">
              Requirement Analysis
            </h3>
            <p className="text-center">
              We review the Customer proposition, validate the projects
              possibility, and collect data as part of the feasibility study
            </p>

            <button className="rounded-lg border p-2 absolute bottom-4 font-medium left-[calc(50%_-_37px)]  hover:text-black hover:bg-slate-300 ">
              Read More
            </button>
          </div>{" "}
          <div className="h-[300px] ">
            <img
              src="./images/logoOnly.png"
              alt=""
              className="h-[40%] block object-contain object-center w-full border-4"
            />
            <div className="part2 p-3 h-[60%] text-center text-white bg-gray-950">
              <h3 className="text-white">Requirement Analysis</h3>
              <p>
                We review the Customer proposition, validate the projects
                possibility, and collect data as part of the feasibility study
              </p>

              <button className="invRead">READ MORE</button>
            </div>
          </div>
          <div className="h-[300px] ">
            <img
              src="./images/logoOnly.png"
              alt=""
              className="h-[40%] block object-contain object-center w-full border-4"
            />
            <div className="part2 p-3 h-[60%] text-center text-white bg-gray-950">
              <h3 className="text-white">Requirement Analysis</h3>
              <p>
                We review the Customer proposition, validate the projects
                possibility, and collect data as part of the feasibility study
              </p>

              <button className="invRead">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aperiam
      cum vel impedit beatae illo. Nostrum est vel, voluptatem porro earum atque
      quaerat rem facere modi quam soluta explicabo corporis magni, praesentium
      enim iusto ad consequatur harum minus suscipit ut at? Excepturi voluptatum
      accusantium, numquam hic, perferendis officia non, veritatis error
      molestiae vitae aliquam mollitia temporibus. Quibusdam, suscipit ea!
      Pariatur perspiciatis vero assumenda aut accusamus illo itaque
      necessitatibus, quos blanditiis rem nemo deserunt voluptatem numquam
      voluptas obcaecati deleniti, excepturi placeat.
    </div>
  )
}

export default Home
