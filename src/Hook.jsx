import { useState } from 'react';
export const Hook = () => {
  const [counter, setcouter] = useState(6);
  const increment = () => {
    setcouter(counter + 1);
  };
  return (
    <div>
      <h1>counter value is:{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
