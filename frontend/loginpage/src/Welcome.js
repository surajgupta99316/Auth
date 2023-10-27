import React from 'react';
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    // Clear the JWT token and username from local storage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    // setUsername('');
    // Redirect or perform any other actions needed after sign-out
    navigate("/"); // Replace with the appropriate route
  };
  
    return (
      <>
        <h1>Welcome page</h1>
        <button onClick={handleSignout}>Sign Out</button>

      </>
     
    )  
};

export default Welcome;
