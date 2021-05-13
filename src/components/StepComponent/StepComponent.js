import React from 'react';

import classes from './StepComponent.module.css';

const StepComponent = (props) => {
  return (
    <div className={classes.StepComponent}>
      <span className={classes.StepNumber}>{'0' + props.stepNumber}</span>
      <h5 className={classes.StepTitle}>{props.title}</h5>
      <p className={classes.StepBody}>
        {props.body}
      </p>
    </div>
  );
};

export default StepComponent;
