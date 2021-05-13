import React from 'react';

import classes from './Logo.module.css'

import {ReactComponent as EndlessLogo} from '../../assets/logo-endless.svg'

const Logo = () => {
  return <div className={classes.Logo}><EndlessLogo /></div> 
}

export default Logo;
