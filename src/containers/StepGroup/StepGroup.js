import React, { useEffect, useState } from 'react';

import { getSteps } from '../../api/stepApi';
import classes from './StepGroup.module.css';
import StepComponent from '../../components/StepComponent/StepComponent';

const StepGroup = (props) => {
  const [stepData, setStepData] = useState('');
  const { loading, setLoading } = props;

  // Get the steps from the api here and set state to the response
  useEffect(() => {
    setLoading(true);
    getSteps().then(
      (data) => {
        setStepData(data);
        setLoading(false);
      }
    );
  }, [setLoading]);

  return (
    <React.Fragment>
      {loading ? (
       null
      ) : (
        <section ref={props.stepGroupRef} className={classes.StepGroup}>
          <h3 className={classes.StepGroupHeader}>How It Works</h3>
          <div className={classes.StepGroupFlex}>
            {stepData.map((step) => {
              return <StepComponent key={step.id} {...step}/>;
            })}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default StepGroup;
