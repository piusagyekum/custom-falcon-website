import React from "react"
import Wrapper from "./components/Wrapper"
import { AiOutlineSafetyCertificate } from "react-icons/ai"
import ShortWrapper from "./components/ShortWrapper"

function About() {
  return (
    <div className="overflow-hidden">
      <ShortWrapper
        background="rgba(0,0,0,0.9) url('./images/wrapper.jpg')no-repeat  top/cover"
        info="about us"
      />
      <section className="container m-auto flex flex-col lg:flex-row items-center p-10 md:px-36 lg:p-5 gap-7">
        <div className="flex-1 leading-7">
          <h3 className="section-title">Who We Are</h3>
          <p className="text-justify">
            Falcon Technologies is an innovative and creative software
            development company in the market to bring the best of experience in
            Web and app development. Our mission is to bridge the gap between
            Organizations and Customers closer together by developing
            multi-functional web site ,USSD services and mobile apps (Android
            and IOS) for any organization whose business strategy is to bring
            their services closer to customers. This is what Falcon technology
            is best at . <br /> <br /> We have the best in the market expertise
            who understands end to end development of all applications and to
            bring your services closer to Customers in the comfort of their
            homes and offices. We specialized in the development of Fintech
            Solutions in the cloud for businesses and we deploy our solutions to
            client onsite IT infrastructure.
          </p>
        </div>
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 93% 6%, 100% 60%, 94% 95%, 5% 96%, 0% 60%, 3% 8%)",
          }}
          className="flex-1 relative before:content-[''] before:block before:w-full before:h-full before:bg-gray-400 before:absolute before:scale-[10] before:opacity-10"
        >
          <img
            src="./images/services.jpg"
            alt=""
            className=" w-full border-red-700  object-cover block "
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
          />
        </div>
      </section>
      <section id="what-we-offer">
        <h3 className="section-title">what we offer</h3>
        <div className="h-96 relative before:absolute before:inset-0 before:bg-slate-500 before:opacity-30">
          <img
            src="./images/offer.jpg"
            alt="iamge"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative -top-11 flex flex-col md:flex-row gap-5 gap-y-14 container m-auto">
          <div className="card">
            <div className="icon">
              <AiOutlineSafetyCertificate className="" />
            </div>
            <h5>Fintech Solutions</h5>
            <p className="mb-6">
              Fintech solutions can range from simple mobile banking
              applications to complex trading algorithms used by investment
              firms.
            </p>
            <button className="rounded-lg border p-2 font-medium  hover:bg-slate-500 hover:text-white transition ">
              Read More
            </button>
          </div>
          <div className="card">
            <div className="icon">
              <AiOutlineSafetyCertificate className="" />
            </div>
            <h5>Mobile Application Development</h5>
            <p className="mb-6">
              Mobile app development involves a variety of different tasks,
              including designing user interfaces, developing application
              features and functionality, testing, debugging, and publishing the
              app to the appropriate app store for distribution.
            </p>
            <button className="rounded-lg border p-2 font-medium  hover:bg-slate-500 hover:text-white transition ">
              Read More
            </button>
          </div>
          <div className="card">
            <div className="icon">
              <AiOutlineSafetyCertificate className="" />
            </div>
            <h5>USSD Services</h5>
            <p className="mb-6">
              USSD services provide a way for users to interact with mobile
              network operators by sending short codes or messages that trigger
              specific actions or responses.
            </p>
            <button className="rounded-lg border p-2 font-medium  hover:bg-slate-500 hover:text-white transition ">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* management */}
      <section id="management" className="bg-gray-100 py-5 mt-7">
        <h3 className="section-title">management</h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-around p-5 gap-5">
          <div className="management-card">
            <img src="./images/people/tagoe.jpeg" alt="ceo" />
            <h4>Ben Tagoe</h4>
            <p> Ceo</p>
          </div>
          <div className="management-card">
            <img src="./images/people/avatar.jpg" alt="" />
            <h4>Benjamin Mensah</h4>
            <p>Project Manager</p>
          </div>
          <div className="management-card">
            <img src="./images/people/james.jpeg" alt="" />
            <h4>James Amo</h4>
            <p>Backend Lead</p>
          </div>
          <div className="management-card">
            <img src="./images/people/thomas.jpeg" alt="" />
            <h4>Thomas Davis</h4>
            <p>Frontend Lead</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
