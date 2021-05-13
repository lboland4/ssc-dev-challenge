import React from 'react';

import classes from './Header.module.css';

import Logo from '../Logo/Logo';

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderFlex}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
