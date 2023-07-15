import React from "react"
import Wrapper from "./components/Wrapper"
import ShortWrapper from "./components/ShortWrapper"

function Cases() {
  return (
    <div>
      <ShortWrapper
        background="rgba(0,0,0,0.9) url('./images/wrapper.jpg')no-repeat  top/cover"
        info="cases and clients"
      />
      <section id="projects" className="my-5">
        <h3 className="section-title">Our Projects</h3>
        <div className="flex  flex-col sm:flex-row flex-wrap md:flex-nowrap justify-around gap-3">
          <div className="h-[300px] sm:w-[45%] md:flex-grow rounded-lg overflow-hidden">
            <img
              src="./images/projects/keedMobile.png"
              className="w-full h-5/6 object-contain"
              alt="keedMobile.png"
            />
            <p className="text-center mt-3 font-bold text-xl">
              KeedPay Mobile Application
            </p>
          </div>
          <div className="h-[300px] sm:w-[45%] md:flex-grow rounded-lg overflow-hidden">
            <img
              src="./images/projects/keedWeb.png"
              className="w-full h-5/6 object-contain"
              alt="KeedWeb"
            />
            <p className="text-center mt-3 font-bold text-xl">
              KeedPay Web Application
            </p>
          </div>
          <div className="h-[300px] sm:w-[45%] md:flex-grow rounded-lg overflow-hidden">
            <img
              src="./images/projects/keedMobile.png"
              className="w-full h-5/6 object-contain"
              alt="USsd"
            />
            <p className="text-center mt-3 font-bold text-xl">KeedPay USSD</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Testimonials</h3>
      </section>
    </div>
  )
}

export default Cases
