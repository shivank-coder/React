import { useEffect, useState } from 'react';

export const Hookonetime = () => {
  useEffect(() => {
    console.log('this will be rander only one time not more then that');
  });
  return (
    <div>
      <h1>hello from useEffect1</h1>
    </div>
  );
};

export const Hookwithdependency = () => {
  const [count, setcount] = useState(1);
  useEffect(() => {
    console.log(
      'this value will be rander everytime whenever count will be changed'
    );
  }, [count]);
  const increment = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>countter value is {count}</h1>
    </div>
  );
};

export const Hookchangedeverytime = () => {
  const [count, setcount] = useState(1);
  useEffect(() => {
    console.log('this value will be printed whenever hook will be rander ');
  });
  const increment = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>countter value is {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
