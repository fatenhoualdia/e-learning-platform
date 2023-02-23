import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Sans from "../../images/Sans.png";
import Math from "../../images/math.png";
import Science from "../../images/sciences.png";
import development from "../../images/development.png";
import Marketing from "../../images/marketing.png";
import { IonIcon } from "@ionic/react";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <div class="content">
          <h3>
            <span>Education</span> The journey of learning begins here
          </h3>
          <p>The best online training platform</p>
          <button className="join">
            {" "}
            <span>Join for free</span>
          </button>
        </div>
      </div>
 
      <div className="cardeducation">
        <a href="#" className="cardd education">
          <div className="overlay"></div>
          <div className="circle">
            <img src={Math} />
          </div>
          <p>Math</p>
        </a>

        <a href="#" className="cardd credentialing">
          <div className="overlay"></div>
          <div className="circle">
            <img src={development} />
          </div>
          <p>Development</p>
        </a>

        <a href="#" className="cardd wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={Science} />
          </div>
          <p>Sience</p>
        </a>

        <a href="#" className="cardd human-resources">
          <div className="overlay"></div>
          <div className="circle">
            <img src={Marketing} />
          </div>
          <p>Marketing</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
