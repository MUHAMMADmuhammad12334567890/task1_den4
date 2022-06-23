import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>Cover</div>
            <div className='header_bloc'>
             <Link className='links_to_the_home' to='/'>Home</Link>
             <Link className='links_to_the_main'  to='/feature'>Features</Link>
             <Link className='links_to_the_main'  to='/contact'>Contact</Link>

            </div>
          
        </div>
    );
};

export default Header;