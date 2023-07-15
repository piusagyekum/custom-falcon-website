import React, { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const fixedHeader = useRef()
  const header = useRef()
  const sideNav = useRef()

  useEffect(() => {
    const sideLinks = sideNav.current.querySelectorAll("a")

    sideLinks.forEach(link => {
      link.addEventListener("click", closeNav)
    })

    return () => {
      sideLinks.forEach(link => {
        link.removeEventListener("click", closeNav)
      })
    }
  }, [])

  const openNav = () => {
    sideNav.current.classList.add("display")
    document.body.style.overflow = "hidden"
  }
  const closeNav = () => {
    sideNav.current.classList.remove("display")
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.isIntersecting
            ? fixedHeader.current.classList.remove("show")
            : fixedHeader.current.classList.add("show")
        })
      },
      {
        threshold: 1,
      }
    )

    headerObserver.observe(header.current)
  }, [])
  return (
    <>
      {/* normal header */}
      <header
        ref={header}
        className="flex justify-around items-center h-14 text-white  absolute w-full"
      >
        <div className="flex items-center gap-2">
          <img src="/images/invLogoOnly.png" className="h-10" alt="logo" />
          <h1 className="text-2xl font-bold">Falcon Technologies</h1>
        </div>
        <nav className="hidden md:flex gap-2">
          <NavLink to="/" className="nav border-white">
            HOME
          </NavLink>
          <NavLink to="/CasesAndClients" className="nav border-white">
            CASES AND CLIENTS
          </NavLink>
          <NavLink to="/AboutUs" className="nav border-white">
            ABOUT US
          </NavLink>
          <NavLink to="/contact" className="nav border-white">
            CONTACT US
          </NavLink>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:hidden cursor-pointer"
          onClick={openNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
      {/* fixed header */}
      <header
        ref={fixedHeader}
        className=" z-40 flex justify-around items-center h-[100px] fixed bg-black text-white top-0 left-0 w-full  -translate-y-96 transition-all duration-500 opacity-0 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <img src="/images/invLogoOnly.png" className="h-10" alt="logo" />
          <h1 className="text-2xl font-bold">Falcon Technologies</h1>
        </div>
        <nav className="hidden md:flex gap-2 h-12">
          <NavLink to="" className="nav border-white">
            HOME
          </NavLink>
          <NavLink to="/CasesAndClients" className="nav border-white">
            CASES AND CLIENTS
          </NavLink>
          <NavLink to="/AboutUs" className="nav border-white">
            ABOUT US
          </NavLink>
          <NavLink to="/contact" className="nav border-white">
            CONTACT US
          </NavLink>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:hidden cursor-pointer"
          onClick={openNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
      {/* sidenav */}
      <nav
        ref={sideNav}
        id="sideNav"
        className="w-full h-screen fixed top-0 right-0 bg-gray-900 p-3 translate-x-full transition-all duration-500 z-50 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6 absolute right-5"
          onClick={closeNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <NavLink to="" className="side-nav">
          HOME
        </NavLink>
        <NavLink to="/CasesAndClients" className="side-nav">
          CASES AND CLIENTS
        </NavLink>
        <NavLink to="/AboutUs" className="side-nav">
          ABOUT US
        </NavLink>
        <NavLink to="/contact" className="side-nav">
          CONTACT US
        </NavLink>
      </nav>
    </>
  )
}

export default Header
