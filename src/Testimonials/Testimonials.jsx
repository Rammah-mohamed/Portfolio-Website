import "./Testimonials.scss"
import Team from "../img/remote-team.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

function Testimonials() {
  const formRef = useRef()
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_wxoasrp', 'template_5pwn9zj', formRef.current, '5DdprONK0qcq6Jr9b')
    setIsSubmit(true)

    formRef.current[0].value = ''
    formRef.current[1].value = ''
    formRef.current[2].value = ''
    formRef.current[3].value = ''
    formRef.current[4].value = ''
  }


  return (
    <div className="testimonials" id="testimonials">
      <div className="wrapper">
        <div className="left">
          <img src={Team} alt="" />
        </div>
        <div className="right">
          <h2>Testimonials</h2>
          <form className="wrapper" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name"/>
            <input type="text" name="subject" placeholder="Enter Your Subject"/>
            <input type="mail" name="mail" placeholder="Enter Your Email"/>
            <textarea name="message" placeholder="Write You Thoughts"></textarea>
            <button>Send</button>
          </form>
          {isSubmit && <h3>Thanks You I Will Replay Soon</h3>}
        </div>
      </div>
    </div>
  )
}

export default Testimonials