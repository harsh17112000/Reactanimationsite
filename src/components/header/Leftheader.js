import React from 'react'
import "./leaftheader.css";

const Leftheader = ({ open, sho }) => {
    return (
        <>
            <div className={open ? "left_header" : "left_header left_scroll"}>
                <div className="left_nav" onClick={sho}>
                    <i className="fa-solid fa-close cross"  ></i>

                </div>
                {/* <Divider /> */}
                <div className="left_nav_iteams">
                    <ul className='ul'>
                        <li> <a href="#about">About</a></li>
                        <li>Rentails</li>
                        <li>book</li>
                        <li>contact</li>
                        <li>services</li>

                        <button className='sign_in'>SignIn</button>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Leftheader