import React from 'react';
import logoImage from './../assest/logo.png'; 

const Logo = ({ w, h }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <image xlinkHref={logoImage} width="100" height="100" x="0" y="0" />
    </svg>
  );
}

export default Logo;
