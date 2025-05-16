import React, { useEffect, useState } from 'react';
import { Pizza } from './pizza';
import { Order } from './Order';
import { Profile } from './profile/Profile';

const App = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPosition(data.postion);
      })
      .catch((e) => {
        console.log('Error fetching profile:', e);
      });
  }, []);

  return (
    <div>
      {/* <h1>Pizza App</h1>
      <h1>Data we are getting from backend is: {message}</h1>
      <h2>
        Position of {name} is {position}
      </h2>
      <Pizza name="onion" />
      <Order /> */}
      <Profile />
    </div>
  );
};

export default App;
