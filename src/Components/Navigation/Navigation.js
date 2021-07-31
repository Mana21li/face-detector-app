import React from 'react';
import './Navigation.css';
const Navigation = ({ onRouteChange, isSignedIn }) =>  {
    if(isSignedIn){    
        return(
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="white grow link ba bw1 mt5 mr4 mb0 pa2 pointer shadow-2">Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className="white grow link ba bw1 mt5 mr4 mb0 pa2 pointer shadow-2">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="white grow link ba bw1 mt5 mr4 mb0 pa2 pointer shadow-2">Register</p>
            </nav>
        );
    }
}

export default Navigation;