import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer_conteyner'>
          <div className='footer_bloc'>
          <p>Cover template for</p>
          <a className='links_footer'  href="https://getbootstrap.com/">Bootstrap</a> 
          <p>by</p>
          <a className='links_footer' href="https://twitter.com/mdo">@mdo</a> 
          </div>
        </div>
    );
};

export default Footer;