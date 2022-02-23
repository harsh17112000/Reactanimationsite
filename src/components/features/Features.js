import React, { useState, useEffect } from 'react'
import "./features.css"
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {

    const [color, setcolor] = useState("first");

    const [move, setMove] = useState(true);

    const setbtn1 = () => {
        setcolor("second")
        setMove(!move)
    }
    const setbtn2 = () => {
        setcolor("first")
        setMove(!move)
    }

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='features_container'>
            <div className="features_section">
                <div className="features_heading">
                    <h1 data-aos="fade-down" data-aos-once="true" data-aos-duration="3000">Get awesome features,without extra charges</h1>
                    <p data-aos="fade-down" data-aos-once="true" data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, blanditiis? Optio, dolore est laborum ratione nobis, explicabo voluptate corporis. Architecto.</p>
                </div>
                <div className="features_btn">
                    <button className={color === "first" ? "btn1" : "extra"} onClick={() => setbtn1()}>Monthly</button>
                    <button className={color === "second" ? "btn2" : "extra"} onClick={() => setbtn2()}>Annually</button>
                </div>

                <div className="features_cards" >
                    {
                        !move ?
                            (
                                <>
                                    <div className="fcards_one ">
                                        <div className="month_data">
                                            <h1>$0<span style={{ fontSize: "10px" }}><sub>/month</sub></span>  </h1>
                                            <h3>Business Class</h3>
                                            <p>for small length of office</p>
                                        </div>
                                        <ul>
                                            <li>Drag and drop builder</li>
                                            <li>1000,'s Templates</li>
                                            <li>Blog Support Tools</li>
                                            <li>Ecommerce store</li>
                                        </ul>
                                        <button>start free trial</button>
                                    </div>
                                    <div className="fcards_one">
                                        <div className="month_data">
                                            <h1>$30<span style={{ fontSize: "10px" }}><sub>/month</sub></span>  </h1>
                                            <h3>Business Class</h3>
                                            <p>for small length of office</p>
                                        </div>
                                        <ul>
                                            <li>Drag and drop builder</li>
                                            <li>1000,'s Templates</li>
                                            <li>Blog Support Tools</li>
                                            <li>Ecommerce store</li>
                                        </ul>
                                        <button>start free trial</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className= "fcards_one" >
                                        <div className="month_data">
                                            <h1>$20<span style={{ fontSize: "10px" }}><sub>/month</sub></span>  </h1>
                                            <h3>Business Class</h3>
                                            <p>for small length of office</p>
                                        </div>
                                        <ul>
                                            <li>Drag and drop builder</li>
                                            <li>1000,'s Templates</li>
                                            <li>Blog Support Tools</li>
                                            <li>Ecommerce store</li>
                                        </ul>
                                        <button>start free trial</button>
                                    </div>
                                    <div className="fcards_one">
                                        <div className="month_data">
                                            <h1>$100<span style={{ fontSize: "10px" }}><sub>/month</sub></span>  </h1>
                                            <h3>Business Class</h3>
                                            <p>for small length of office</p>
                                        </div>
                                        <ul>
                                            <li>Drag and drop builder</li>
                                            <li>1000,'s Templates</li>
                                            <li>Blog Support Tools</li>
                                            <li>Ecommerce store</li>
                                        </ul>
                                        <button>start free trial</button>
                                    </div>
                                </>
                            )

                    }



                </div>
            </div>
        </div>
    )
}

export default Features