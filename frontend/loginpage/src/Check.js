import React, { useState } from 'react';
import Welcome from './Welcome';
import { createRoutesFromChildren, useNavigate } from "react-router-dom";

function Check() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await fetch('http://localhost:4000/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        if (response.status=="201") {
          const token = data.token;
          // Store the token in local storage
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('username', formData.username);
          setUsername(formData.username);
          console.log(formData.username)
          console.log("You have been authenticated")
            alert("You have been authenticated");
            navigate("/welcome") 
        } else{
            console.log("err")
        }
        console.log(message);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleSignin}>Sign Up</button>
      <p>{message}</p>
        {/* Render the Welcome component when the user is authenticated */}
        {username && <Welcome username={username} />}
    </div>
  );
}

export default Check;
