import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
    return(
        <div className='signOut'>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign Out</p>
        </div>
    )
}
export default Navigation;