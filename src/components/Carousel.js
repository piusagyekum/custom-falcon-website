import React, { useEffect } from 'react'

function Carousel() {
  
  useEffect(() => {
    const carousel = Array.from(document.querySelector("#slides"))

    const carouselInterval = setInterval(() => {
      const activeSlide = carousel.querySelector('.active')

      const newActiveSlide = console.log(carousel.indexOf(activeSlide) + 1)
      
      

      
    },1000);
  
    return () => {
    
    }
  }, [])
  
  return (
    <div id="slides" className=''>
      <div
        className="slide"
        style={{
          background: "url('./images/offer.jpg') no-repeat center / cover",
        }}
      >
        <p className="slide-caption"></p>
      </div>
      <div
        className="slide"
        style={{
          background: "url('./images/erapper.jpg') no-repeat center / cover",
        }}
      >
        <p className="slide-caption"></p>
      </div>
      <div
        className="slide active"
        style={{
          background: "url('./images/services.jpg') no-repeat center / cover",
        }}
      >
        <p className="slide-caption"></p>
      </div>
    </div>
  )
}

export default Carousel
