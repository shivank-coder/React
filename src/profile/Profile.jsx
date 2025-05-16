import { useState } from 'react';
import './profile.css';

// ✅ COMPONENT NAME should be Capitalized
export const Profile = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('india');
  const [code, setCode] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here
    const form = {
      name: name,
      address: address,
      country: country,
      code: code,
    };

    fetch('/api/profile/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        res.JSON();
      })
      .catch((e) => console.log(e));

    console.log({ name, address, country, code });
  };

  return (
    <div className="profile">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          placeholder="Please Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Please Enter Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="japan">Japan</option>
          <option value="china">China</option>
        </select>

        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          placeholder="Please Enter Your Area Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
