import { useState } from 'react';

const Visitors = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const clickHandler = () => {
    setNumVisitors((prevState) => prevState + 1);
    setNumVisitors((prevState) => prevState + 1);
    setNumVisitors((prevState) => prevState + 1);
    setNumVisitors((prevState) => prevState + 1);
    setNumVisitors((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Number of visitors: {numVisitors}</h2>
      <button onClick={clickHandler}>Add a visitor</button>
    </div>
  );
};

export default Visitors;
