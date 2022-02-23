import React, { useEffect } from 'react'
import "./about.css"
import { Appdata } from './Data';
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='about_container' id='about'>

      <div className="left">
        <div className="about_heading" data-aos="fade-down" data-aos-once="true" data-aos-duration="2000">
          <h1>Ultimate features That we built</h1>
          <p>the rise of mobile device transform the way consume information entirely.</p>
        </div>
        <div className="about_cards">
          {
            Appdata.map((ele, k) => {
              return (
                <>
                  <div className="cards_data" data-aos="fade-down" data-aos-once="true" data-aos-duration="3000">
                    <img src={ele.img} alt="img" />
                    <h3>{ele.big_text}</h3>
                    <p>{ele.small_text}</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <div className="about_svg" data-aos="flip-left" data-aos-once="true" data-aos-duration="3000">
          <img src="./startup.svg" alt="svgdata" />
        </div>
      </div>
    </div>
  )
}

export default About