import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_33bkyjh",
        "template_ybgcjmz",
        form.current,
        "jQu2lbjpw5ObKnvKJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail size={25} />
            <h4>Email</h4>
            <h5>santomh27@gmail.com</h5>
            <a href="mailto:santomh27@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine size={25} />
            <h4>Messenger</h4>
            <h5>Mahmodul Hasan Santo</h5>
            <a href="https://m.me/mhsanto072">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp size={25} />
            <h4>WhatsApp</h4>
            <h5>+88 0161399773</h5>
            <a href="https://api.whatsapp.com/send?phone+=8801613993773">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-control">
            <input type="text" name="name" required />
            <label>
              <span style={{ transitionDelay: "0ms" }}>F</span>
              <span style={{ transitionDelay: "50ms" }}>u</span>
              <span style={{ transitionDelay: "100ms" }}>l</span>
              <span style={{ transitionDelay: "150ms" }}>l</span>
              <span style={{ transitionDelay: "250ms" }}>N</span>
              <span style={{ transitionDelay: "300ms" }}>a</span>
              <span style={{ transitionDelay: "350ms" }}>m</span>
              <span style={{ transitionDelay: "350ms" }}>e</span>
            </label>
          </div>
          <div class="form-control">
            <input type="text" name="email" required />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
              <span style={{ transitionDelay: "250ms" }}>A</span>
              <span style={{ transitionDelay: "300ms" }}>d</span>
              <span style={{ transitionDelay: "350ms" }}>d</span>
              <span style={{ transitionDelay: "350ms" }}>r</span>
              <span style={{ transitionDelay: "350ms" }}>e</span>
              <span style={{ transitionDelay: "350ms" }}>s</span>
              <span style={{ transitionDelay: "350ms" }}>s</span>
            </label>
          </div>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">
            <span>Send</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
