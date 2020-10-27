import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('thin');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'thin',
    isGlutenFree: true
  });

  const onCrustChange = (newCrust) => {
    setPizza({
      ...pizza,
      crustType: newCrust
    });
  };

  const onAddTopping = () => {
    // toppings.push(newTopping); // [pineapple, cheese]
    // const newArray = [...toppings];
    // newArray.push(newTopping);
    // setToppings(newArray);

    // setToppings([...toppings, newTopping]);
    // setToppings(prevToppings => [...prevToppings, newTopping]);

    if (!pizza.toppings.includes(newTopping)) {
      setPizza({
        ...pizza,
        toppings: [
          ...pizza.toppings,
          newTopping
        ]
      });
    }
  };

  return (
    <div>
      <h2>Build your own pizza</h2>

      <h2>Crust: {pizza.crustType}</h2>
      <label>Crust Type:</label>
      <input
        value={pizza.crustType}
        onChange={event => onCrustChange(event.target.value)} 
      />

      <br/>
      <label>New Topping:</label>
      <input 
        value={newTopping} 
        onChange={(event) => setNewTopping(event.target.value)} 
      />
      <button onClick={onAddTopping}>Add Topping!</button>

      <h2>Toppings:</h2>
      { pizza.toppings.map((topping, index) => <h3 key={topping}>{topping}</h3>)}
    </div>
  );
};

export default Pizza;
