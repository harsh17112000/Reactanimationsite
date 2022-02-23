import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <>
        <header>
            <nav>
               <div className="logo">
                   <h1>App<span style={{color:"#130f40"}}>Web</span></h1>
               </div>
               <div className="route">
                   <ul>
                       <li> <a href="#about">About</a></li>
                       <li>Rentails</li>
                       <li>book</li>
                       <li>contact</li>
                       <li>services</li>
                   </ul>
               </div>
               <div className="get_touch">
                   <p>GET IN TOUCH</p>
               </div>
            </nav>
        </header>
    </>
  )
}

export default Header