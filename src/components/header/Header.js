import React,{useState} from 'react'
import "./header.css"
import Leftheader from './Leftheader'

const Header = () => {

    const [show, setShow] = useState(false);

    const openbox = ()=>{
        setShow(true)
    }

    const closebox = ()=>{
        setShow(false)
    }

    return (
        <>
            <header>
                <nav>
                <i className="fa-solid fa-bars ham hide" onClick={openbox} ></i>
                    <div className='sidebaar' >
                        <Leftheader open={show} sho={() => closebox()} />
                    </div>
                    <div className="logo">
                        <h1>App<span style={{ color: "#130f40" }}>Web</span></h1>
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