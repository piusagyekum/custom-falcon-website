import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer
      style={{
        background:
          "rgba(5, 5, 5, 0.99) url('./images/footer.jpg') no-repeat scroll right top / cover",
      }}
      className="bg-blend-multiply text-white p-7"
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div>
          <div className="">
            <img src="" alt="" />
            <h1 className="font-bold text-xl">Falcon Technologies</h1>
          </div>
          <p>
            Unleashing the power of code to transform your vision into reality.
            Our innovative solutions are engineered to revolutionize your
            business. From idea to implementation, we make your digital dreams a
            reality. Let us help you take your business to the next level with
            our expertise and innovation!
          </p>
        </div>
        <div className="flex flex-col items:center md:items-start gap-2  w-[max-content] md:mx-auto ">
          <h3 className="font-bold text-xl px-3">Quicklinks</h3>
          <Link to="/contact" className="  px-3 w-[fit-content]  leading-10">
            Contact us
          </Link>
          <Link to="/CasesAndClients" className="  px-3 w-[fit-content]  leading-10">
            Cases and Clients
          </Link>
          <Link to="/about" className=" px-3 w-[fit-content]  leading-10">
            About Us
          </Link>
          
        </div>
        <div className="w-[max-content]  md:mx-auto gap-2">
          <h3 className="font-bold text-xl">Socials</h3>
          <div className="">
            <p className="leading-10">Linkedin</p>
          </div>
          <div className="">
            <p className="leading-10">Instagram</p>
          </div>
        </div>
      </div>
      <div className="sm:text-right">
        &copy;
        {`${new Date().getFullYear()} Developed by Falcon Technologies. All Rights Reserved`}
      </div>
    </footer>
  )
}

export default Footer
