import React, { useState, useRef } from 'react';

import classes from './App.module.css';

import Header from './common/Header/Header';
import Hero from './components/Hero/Hero';
import StepGroup from './containers/StepGroup/StepGroup';
import Loader from './components/Loader/Loader'

function App() {
  const [loading, setLoading] = useState(true);
  const stepGroupRef = useRef(null);

  // scrolling to How It Works section. Would've usually used a library to help with this.
  // But I can always use practice doing something on my own :)
  const scroll = () => stepGroupRef.current.scrollIntoView({behavior: 'smooth'});

  return (
    <div className={classes.App}>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header />
          <Hero getStartedClick={scroll}/>
        </React.Fragment>
      )}
      <StepGroup stepGroupRef={stepGroupRef} loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
