import React from 'react';
import Homes from './Homes';
import { Route, Routes } from "react-router-dom";
import Check from './Check';
import Firstpage from './Firstpage'
import Welcome from './Welcome';

const App = () => {
    return (
      <>
      <Routes>
      <Route exact path="/" element={<Firstpage />} />
        <Route path="/signup" element={<Homes />} />
        <Route path="/signin" element={<Check />} />
        <Route path="/welcome" element={<Welcome />}/>
      </Routes>
      </>
     
    )  
};

export default App;
