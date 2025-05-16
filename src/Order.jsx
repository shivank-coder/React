import { useState } from 'react';

export const Order = () => {
  const [pizzaType, setPizzaType] = useState('pepperoni');
  const [pizzaSize, setPizzaSize] = useState('s');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pizza Type:', pizzaType);
    console.log('Pizza Size:', pizzaSize);

    const form = {
      type: pizzaType,
      size: pizzaSize,
    };
    fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Server se response:', data);
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pizza-Type">Pizza Type</label>
        <br />
        <select
          name="pizza-type"
          value={pizzaType}
          onChange={(e) => setPizzaType(e.target.value)}
        >
          <option value="pepperoni">The Pepperoni Pizza</option>
          <option value="Onion">The Onion Pizza</option>
          <option value="capsicum">The Capsicum Pizza</option>
        </select>
        <br />
        <label htmlFor="pizza-Size">Pizza Size</label>
        <div>
          <input
            type="radio"
            id="pizza-s"
            name="pizza-size"
            value="s"
            checked={pizzaSize === 's'}
            onChange={(e) => setPizzaSize(e.target.value)}
          />
          <label htmlFor="pizza-s">Small</label>
          <input
            type="radio"
            id="pizza-m"
            name="pizza-size"
            value="m"
            checked={pizzaSize === 'm'}
            onChange={(e) => setPizzaSize(e.target.value)}
          />
          <label htmlFor="pizza-m">Medium</label>
          <input
            type="radio"
            id="pizza-b"
            name="pizza-size"
            value="b"
            checked={pizzaSize === 'b'}
            onChange={(e) => setPizzaSize(e.target.value)}
          />
          <label htmlFor="pizza-b">Big</label>
        </div>

        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};
