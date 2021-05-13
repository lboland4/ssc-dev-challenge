import classes from './Loader.module.css';
import React from 'react';

const Loader = () => {
  return (
    <div className={classes.LoaderContainer}>
      <div className={classes.Loader}></div>
    </div>
  );
};

export default Loader;
