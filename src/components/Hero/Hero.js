import React from 'react';

import classes from './Hero.module.css';
import HeroBackground from '../../assets/photo-couch.jpg';
import Button from '../../common/Button/Button';

const Hero = (props) => {
  return (
    <div className={classes.Hero}>
      <div className={classes.HeroContentFlex}>
        <h4 className={classes.Subtitle}>New Games & Accessories</h4>
        <h2 className={classes.Title}>Monthly Packages.</h2> 
        <h2 className={classes.Title}> Excitement Delivered Daily.</h2>
        <p className={classes.ParagraphContent}>What's the best way to shop for the latest video games and peripherals?
           How about never shopping at all? You'll get new stuff on your doorstep - every month.</p>
        <Button clicked={props.getStartedClick} buttonText="get started"/>
      </div>
      <img src={HeroBackground} alt="Hero background" />
    </div>
  );
};

export default Hero;
