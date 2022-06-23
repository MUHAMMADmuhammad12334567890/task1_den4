import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
                  <div className='header'>
            <div>Cover</div>
            <div className='header_bloc'>
             <Link className='links_to_the_main' to='/'>Home</Link>
             <Link className='links_to_the_main'  to='/feature'>Features</Link>
             <Link className='links_to_the_2page'  to='/contact'>Contact</Link>

            </div>
          
        </div>
        </div>
    );
};

export default Header;