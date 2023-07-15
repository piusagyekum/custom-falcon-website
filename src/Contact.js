import React, { useState } from "react"
import Wrapper from "./components/Wrapper"
import { IoLocationSharp } from "react-icons/io5"
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaClock } from "react-icons/fa"
import ShortWrapper from "./components/ShortWrapper"
import { contactSchema } from "./util/FormValidations"

function Contact() {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    description: "",
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const validation = contactSchema.validate(payload, {
      allowUnknown: true,
      abortEarly: false,
    })

    const errorList = {}

    validation?.error?.details.forEach(err => {
      errorList[err.path[0]] = err.message.replaceAll('"', "")
    })

    setErrors(errorList)

  }

  const handleSubmit = e => {
    e.preventDefault()
    validate()
    //send details after the validation
  }

  const formOnChange = (key, value) => {
    setPayload(prev => {
      return { ...prev, [key]: value }
    })
  }

  return (
    <div>
      <ShortWrapper
        background="rgba(0,0,0,0.9) url('./images/wrapper.jpg')no-repeat  top/cover"
        info="contact"
      />
      <section className="p-5">
        <h3 className="section-title">Contact Info</h3>
        <p className="text-center my-5">
          Meet us at a Cyberteq office near you or reach us electronically. Our
          experts will help you to choose the proper solution for your
          organization and answer all questions related to Cybersecurity,
          Digital Transformation & Telecommunication.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="contact-card">
            <div className="contact-card-header">
              <IoLocationSharp className="text-2xl text-slate-500" />
              <h2 className=""> Office Location</h2>
            </div>
            <p className="text-sm text-gray-800 my-3">
              You can reach us at the following address:
            </p>
            <p className="contact-card-header">
              Cyberteq Falcon Ltd, BJ Global Home, E.D Sowah Avenue, East Legon,
              Accra, Ghana
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <HiOutlineMailOpen className="text-2xl text-slate-500" />
              <h2> Email Address</h2>
            </div>
            <p>
              Send us your questions by email and we will reply as soon as
              possible:
            </p>
            <p>btfalcontechnologies@gmail.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <FaClock className=" text-2xl text-slate-500 " />
              <h2> Working Hours</h2>
            </div>
            <p>We are doing our best to secure our customers. Working hours:</p>
            <p>Mon – Fri: 8 AM – 5 PM Sat – Sun: Closed.</p>
          </div>
        </div>
      </section>
      <section className="py-5 px-10">
        <h3 className="text-2xl font-bold ">Get In Touch</h3>
        <p className=" text-lg text-slate-700 font-medium m-5 text-center">
          Thank you for your interest in Falcon Technologies. Please provide the
          following information about your business needs. This information will
          enable us to route your request to the appropriate person. You should
          receive a response within two days.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <form
            action=""
            onSubmit={handleSubmit}
            noValidate
            className="flex-1 grid grid-cols-2 gap-4"
          >
            <div>
              <label htmlFor="name" className="form-label">
                your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Enter your name"
                value={payload.name}
                onChange={e => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors.name}</div>
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                your email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="form-input"
                value={payload.email}
                onChange={e => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors.email}</div>
            </div>
            <div>
              <label htmlFor="subject" className="form-label">
                subject
              </label>
              <input
                type="text"
                className="form-input"
                name="subject"
                placeholder="Enter a subject"
                id="subject"
                value={payload.subject}
                onChange={e => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors.subject}</div>
            </div>
            <div>
              <label htmlFor="number" className="form-label">
                your phone number
              </label>
              <input
                type="text"
                id="number"
                className="form-input"
                placeholder="Enter your phone number"
                name="mobile"
                value={payload.mobile}
                onChange={e => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors.mobile}</div>
            </div>
            <div className="col-span-2">
              <label htmlFor="desc" className="form-label">
                how can we help you
              </label>
              <textarea
                name="description"
                id="desc"
                className="w-full border border-black outline-none p-3"
                placeholder="Type your message here"
                value={payload.description}
                onChange={e => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors.description}</div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-black hover:bg-slate-500 cursor-pointer w-[fit-content] px-3 leading-10 rounded-full font-medium text-white mx-auto col-span-2"
              onClick={validate}
            />
          </form>
          <div className="md:flex-1 bg-slate-200 overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.625400775325!2d-0.1498856!3d5.6542124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d79a7634f5f%3A0x96f2b3498ca794d2!2sCYBERTEQ%20Falcon%20Limited!5e0!3m2!1sen!2sgh!4v1680009150550!5m2!1sen!2sgh"
              // width="600"
              // height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="map"
              className="w-full h-full"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
