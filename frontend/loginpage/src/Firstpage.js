import React from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    return (
      <>
      Login and register
      <br/>
      <button onClick={() => navigate("/signup")}>SignUp page</button>
      <button onClick={() => navigate("/signin")}>SignIn page</button>
      </>
     
    )  
};

export default App;
