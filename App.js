import React from 'react';

import { Header, Footer, WhatGPT3, Features, Possibility, Blog } from './containers';
import { Aritcle, Brand, Navbar, CTA, Feature, } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
    <Navbar /> 
    <Header />
    <div className='container'>
      <Feature />
  </div>

    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Aritcle />
    <CTA />
    <Blog />
    <Footer />  
    </div>
  )
}
export default App
