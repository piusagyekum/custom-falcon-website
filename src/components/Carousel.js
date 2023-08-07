import React, { useEffect, useRef, useState } from "react"

function Carousel() {
  // const [dragging,setDragging] = useState(false)
  const slider = useRef()
  const card = useRef()
  // const [dragging, setDragging] = useState(false)
  let dragging;
  // const [mouseStartPosition, setMouseStartPosition] = useState()
  // const [startScrollLeft, setStartScrollLeft] = useState()
  let mouseStartPosition,startScrollLeft;

  const dragFunction = e => {
    if (dragging === false) return
    slider.current.scrollLeft =
      startScrollLeft - (e.clientX - mouseStartPosition)
  }

  useEffect(() => {
    const firstCardWidth = card.current.offsetWidth

    slider.current.addEventListener("mousedown", e => {
      dragging = true;
      slider.current.classList.add('dragging')
      mouseStartPosition = e.clientX
      startScrollLeft = slider.current.scrollLeft
    })

    slider.current.addEventListener("mousemove", dragFunction)


    slider.current.addEventListener("mouseup", e => {
      dragging = false
      slider.current.classList.remove("dragging")
    })

    const buttons = slider.current
      .closest(".carousel")
      .querySelectorAll("button")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        slider.current.scrollLeft +=
        button.id === "left" ? -firstCardWidth : firstCardWidth
      })
    })

    Array.from(slider.current.querySelectorAll("img")).forEach(img => {
      img.draggable = false
    })

    return () => {
      slider.current.removeEventListener("mousemove", dragFunction)
    }
  }, [])

  console.log("rendered")

  return (
    <div className="carousel relative border-2 border-red-600 m-7">
      <button
        id="left"
        className="bg-green-500 text-5xl absolute left-0 top-1/2  -translate-y-1/2 -translate-x-1/2 rounded-full p-3"
      >{`<`}</button>
      <button
        id="right"
        className="bg-green-500 text-5xl absolute right-0 top-1/2 rounded-full translate-x-1/2 -translate-y-1/2 p-3"
      >{`>`}</button>
      <ul
        ref={slider}
        className="slider grid grid-flow-col auto-cols-[30%] gap-[calc(10%_/_3)] border-2 border-red-600 overflow-hidden scroll-smooth "
        onScroll={() => {
          if(slider.current.scrollLeft === 0) console.log('this is the left end')
          if(slider.current.scrollLeft === slider.current.scrollWidth - slider.current.offsetWidth) console.log('this is the right end')
        }
        }
      >
        <li ref={card} className=" bg-slate-800  rounded-lg">
          <img src="images/offer.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
        <li className=" bg-slate-800  rounded-lg ">
          <img src="images/offer.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
        <li className=" bg-slate-800  rounded-lg ">
          <img src="images/services.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
        <li className=" bg-slate-800  rounded-lg ">
          <img src="images/services.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
        <li className=" bg-slate-800  rounded-lg ">
          <img src="images/offer.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
        <li className=" bg-slate-800  rounded-lg ">
          <img src="images/offer.jpg" alt="" />
          <p>this is some tesafldflk jfgiodfjg ojdfsiojdg jgdsiojg s gsjo</p>
        </li>
      </ul>
    </div>
  )
}

export default Carousel

