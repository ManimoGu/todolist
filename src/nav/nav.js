import React from 'react';

import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {

    return (

        <div>
        
        <ul>

            <Link to='/'><li className='navi'>Home</li></Link>
            <Link to='/Movies'><li className='navi' >Movies</li></Link>
            <Link to ='/Contact'><li className='navi' >Contact</li></Link>

        </ul>
            
        </div>
    )
}

export default Nav;
