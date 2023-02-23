import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { addmessage } from "../../../JS/Actions/message";
import "./Contact.css";

function Contact() {
  const [contact, setcontact] = useState({});
  const dispatch = useDispatch();
  return (
    <div className="contact">
      <Navbar />
      <h1 className="heading"> Contact Us </h1>
      <div class="icons-containercontact">
        <div class="iconscontact">
          <i class="fas fa-clock"></i>
          <h3>opening hours :</h3>
          <p>07am to 6pm</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-phone"></i>
          <h3>phone :</h3>
          <p>22490208</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-envelope"></i>
          <h3> email : </h3>
          <p>fatenkhoualdia@gmail.com</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-map"></i>
          <h3>address :</h3>
          <p>Gafsa, Mdhilla</p>
        </div>
      </div>
      <div class="rowcontact">
        <div class="imagecontact">
          <img src="contact-img.png" alt="" />
        </div>
        <div className="formcontact">
          <h3>send us a message</h3>
          <input
            type="text"
            placeholder="name"
            class="boxcontact"
            onChange={(e) => {
              setcontact({ ...contact, name: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="email"
            class="boxcontact"
            onChange={(e) => {
              setcontact({ ...contact, email: e.target.value });
            }}
          />
          <textarea
            name=""
            class="boxcontact"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setcontact({ ...contact, message: e.target.value });
            }}
          ></textarea>
          <input
            type="submit"
            value="send message"
            class="btncontact"
            onClick={() => {
              dispatch(addmessage(contact));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

