import React from 'react'
import Typewriter from "typewriter-effect";
import "./home.css"

const Home = () => {
  return (
    <>
      <section>
        <div className="left_section">
          <div className="left_data">
            <div className="add">
              <p><span>✔</span>#Editors Choice App of 2020</p>
            </div>
            <div className="bigtext">
              
              <h1 className="lightcolor2"><span>
                        <Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 90,
                                strings: [
                                    "Best app for your modern lifestyle ."
                                ]
                            }} /> </span> </h1>
            </div>
            <div className="btn">
              <button>TRY FOR FREE</button>
            </div>
          </div>

         <div className="template">
           <div className="left_part">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nulla.  </p>
            <p className='price'>$12.00</p>
            <p className='Ios'>Ios app</p>
           </div>
           <div className="right_part">
            <img src="./templet.svg" style={{width:"200px"}} alt="" />
           </div>
         </div>
        </div>
        <div className="right_section">
          <div className="right_svg">
            <img src="./home_1.png" alt="animation" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home