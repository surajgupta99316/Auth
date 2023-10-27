import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:4000/users/signup', {
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
            console.log("Message there")
            alert("New user has been created")
            const token = data.token;
          // Store the token in local storage
          localStorage.setItem('jwtToken', token);
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
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
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
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
}

export default MyComponent;
