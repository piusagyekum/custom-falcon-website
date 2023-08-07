import React from "react"
import Wrapper from "./components/Wrapper"
import ShortWrapper from "./components/ShortWrapper"
import { useRef, useEffect } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

function Cases() {
  const slider = useRef()
  const indicators = useRef()
  let carouselIndex = 0

  const moveLeft = () => {
    carouselIndex > 0 ? (carouselIndex -= 1) : (carouselIndex = 0)

    slider.current.style.transform = `translateX(${carouselIndex * -33.33}%)`
    Array.from(indicators.current.children).forEach(indicator => {
      indicator.classList.remove("active")
    })

    indicators.current.children[carouselIndex].classList.add("active")
  }
  const moveRight = () => {
    carouselIndex < 2 ? (carouselIndex += 1) : (carouselIndex = 2)
    slider.current.style.transform = `translateX(${carouselIndex * -33.33}%)`

    Array.from(indicators.current.children).forEach(indicator => {
      indicator.classList.remove("active")
    })

    indicators.current.children[carouselIndex].classList.add("active")
  }

  useEffect(() => {
    // const carouselTimeout = setInterval(() => {
    //   if (carouselIndex >= 2) {
    //     slider.current.style.transform = `translateX(0%)`
    //   } else {
    //     moveRight()
    //   }
    // }, 3000)
    const indicatorParent = document.querySelector(".indicators")
    const indicators = indicatorParent.querySelectorAll("div")

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        carouselIndex = index

        indicators.forEach(indicator => {
          indicator.classList.remove("active")
        })

        indicator.classList.add("active")

        slider.current.style.transform = `translateX(${
          carouselIndex * -33.33
        }%)`
      })
    })

    // return () => {
    //   clearInterval(carouselTimeout)
    // }
  }, [])

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
      <section className="mb-5">
        <h3 className="section-title">Testimonials</h3>
        <div className="test-carousel py-5 mx-5 md:w-9/12 border-2 border-slate-500 rounded-xl md:mx-auto relative">
          <ul ref={slider} className="test-slider flex">
            <li className="test-carousel-item">
              1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              accusamus modi in et laboriosam officia similique sunt vitae sit
              unde corporis labore! Optio facilis neque quo dolores repudiandae
              blanditiis iure commodi ad aliquam! Enim dicta impedit unde autem
              odio aut recusandae nisi libero eligendi vero doloribus
              consequatur, fugiat ducimus? Voluptatum autem temporibus sed a
              saepe numquam repellendus officiis mollitia minima deserunt animi
              quod nam quo aperiam esse non, necessitatibus nemo itaque ut ex
              laborum. Necessitatibus repudiandae eius explicabo nemo autem
              aspernatur alias ullam velit omnis assumenda accusantium in culpa
              fugiat totam sequi dolores, commodi pariatur esse, voluptatum
              consectetur incidunt. Optio.
            </li>
            <li className="test-carousel-item">
              2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              accusamus modi in et laboriosam officia similique sunt vitae sit
              unde corporis labore! Optio facilis neque quo dolores repudiandae
              blanditiis iure commodi ad aliquam! Enim dicta impedit unde autem
              odio aut recusandae nisi libero eligendi vero doloribus
              consequatur, fugiat ducimus? Voluptatum autem temporibus sed a
              saepe numquam repellendus officiis mollitia minima deserunt animi
              quod nam quo aperiam esse non, necessitatibus nemo itaque ut ex
              laborum. Necessitatibus repudiandae eius explicabo nemo autem
              aspernatur alias ullam velit omnis assumenda accusantium in culpa
              fugiat totam sequi dolores, commodi pariatur esse, voluptatum
              consectetur incidunt. Optio.
            </li>
            <li className="test-carousel-item">
              3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              accusamus modi in et laboriosam officia similique sunt vitae sit
              unde corporis labore! Optio facilis neque quo dolores repudiandae
              blanditiis iure commodi ad aliquam! Enim dicta impedit unde autem
              odio aut recusandae nisi libero eligendi vero doloribus
              consequatur, fugiat ducimus? Voluptatum autem temporibus sed a
              saepe numquam repellendus officiis mollitia minima deserunt animi
              quod nam quo aperiam esse non, necessitatibus nemo itaque ut ex
              laborum. Necessitatibus repudiandae eius explicabo nemo autem
              aspernatur alias ullam velit omnis assumenda accusantium in culpa
              fugiat totam sequi dolores, commodi pariatur esse, voluptatum
              consectetur incidunt. Optio.
            </li>
          </ul>
          <div className="controls">
            <BsChevronCompactLeft
              className="left absolute top-1/2 -translate-y-1/2 text-slate-500 rounded-full cursor-pointer"
              size={35}
              onClick={moveLeft}
            />
            <BsChevronCompactRight
              className="left absolute top-1/2 -translate-y-1/2 rounded-full right-0 text-slate-500 cursor-pointer"
              size={35}
              onClick={moveRight}
            />
            
          </div>
          <div ref={indicators} className="indicators">
            <div className="active"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cases
