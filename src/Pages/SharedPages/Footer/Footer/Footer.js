import React from 'react';
import ContactFooter from '../ContactFooter';
import FooterMenu from '../FooterMenu';
import RightsFooter from '../RightsFooter';

const Footer = () => {
   return (
      <div className='mt-10'>
         <ContactFooter/>
         <FooterMenu/>
         <RightsFooter/>
         
      </div>
   );
};

export default Footer;