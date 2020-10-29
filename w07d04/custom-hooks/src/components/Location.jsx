import useLocationData from '../hooks/useLocationData';

const Location = () => {
  const {lat, lon} = useLocationData();

  const clickHandler = () => {
    alert(`you are at ${lat}, ${lon}`);
  };

  return (
    <div>
      <h2>Location!</h2>
      <button onClick={clickHandler}>See where you are!</button>
    </div>
  );
};

export default Location;
