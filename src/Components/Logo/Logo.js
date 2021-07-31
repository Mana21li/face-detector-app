import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.jpg';
import './Logo.css'
const Logo = () => {
    return (
        <div className="icon">
            <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 140, width: 140 }} >
                <div className="Tilt-inner"> <img className='logo' src= {logo} alt="logo" /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;
