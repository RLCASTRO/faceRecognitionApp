import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, route }) => {


    if (route === 'home') {
        return (
            <nav className='signOut'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign Out</p>
            </nav>
        )

    } else if ( route === 'signin') {
        return (
            <nav className='signOut'>
                <p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'> Register </p>
            </nav>
        )

    } else if ( route === 'register') {
        return (
            <nav className='signOut'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'> Sign In </p>
            </nav>
        )

    }

}
export default Navigation;